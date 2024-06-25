import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, getUsers,deleteUse,updateUser } from '../store/reducers/userReducer';
export default function Admin() {
    const getData:any=useSelector(state=>state);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getUsers());
    },[]);
    const addNewUser=()=>{
        let newUser={
            name:'Minh Mạnh',
        }
        dispatch(addUser());
    }
    const deleteUser=(id:any)=>{
        dispatch(deleteUse(id))
    }
    const handleUpdate=(id:any)=>{
        dispatch(updateUser({id:id,user:{
            id:id,
            name:'quan le',
        }}));
    }
    return (
        <div>Admin
            {getData.user.users.map(function(e:any){
                return <li key={e.id}>
                    <span>{e.name}</span>
                    <button onClick={()=>{deleteUser(e.id)}}>Delete</button>
                    <button onClick={()=>{handleUpdate(e.id)}}></button>
                </li>
            })}
            <button onClick={addNewUser} >ADD USER</button>
        </div>

    )
}
