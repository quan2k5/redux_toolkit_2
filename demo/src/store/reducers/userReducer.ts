import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialUser: any[] = [];
export const getUsers: any = createAsyncThunk(
  "users/getAllUser",
  async () => {
    const response = await axios.get('http://localhost:3000/users');
    return response.data;
  }
);
export const addUser:any=createAsyncThunk(
    "users/addUser",
    async (user)=>{
        const response=await axios.post('http://localhost:3000/users',user);
        return response.data;
    }
)
export const deleteUse:any=createAsyncThunk(
    'users/deleteUser',
    async (id:any)=>{
        const response=await axios.delete(`http://localhost:3000/users/${id}`);
        return response.data;
    }
)
export const updateUser:any=createAsyncThunk(
    'users/updateUser',
    async(obj:any)=>{
        const response=await axios.patch(`http://localhost:3000/users/${obj.id}`,obj.user);
        return response.data;
    }
)
const reducerUsers = createSlice({
  name: 'users',
  initialState: { users: initialUser },
  reducers: {
    // Khai báo các action
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state: any, action: PayloadAction<any>) => {
        // Xử lý trạng thái pending
      })
      .addCase(getUsers.fulfilled, (state: any, action: PayloadAction<any>) => {
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state: any, action: PayloadAction<any>) => {
        // Xử lý trạng thái rejected
      })
      .addCase(addUser.fulfilled,(state:any,action:PayloadAction<any>)=>{
        state.users.push(action.payload);
      })
      .addCase(deleteUse.fulfilled,(state:any,action:PayloadAction<any>)=>{
        state.users=state.users.filter((item:any)=>{
            return item.id!=action.payload;
        })
      })
      .addCase(updateUser.fulfilled,(state:any,action:PayloadAction<any>)=>{
        let newArr=state.users.map((e:any)=>{
            if(e.id===action.payload.id){
                e.name=action.payload.user.name;
            }
            return e;
        })
        state.users=newArr;
      })
  },
});
export default reducerUsers.reducer;
