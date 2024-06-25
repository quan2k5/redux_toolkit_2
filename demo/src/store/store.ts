import Users from './reducers/userReducer'
import  {configureStore} from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{
        user:Users,
    }
})
export default store;
