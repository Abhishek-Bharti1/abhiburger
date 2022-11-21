import {configureStore} from "@reduxjs/toolkit";
import { adminReducer } from "./reducers/adminReducer";
import { cartReducer, orderReducer } from "./reducers/cartReducer";
import { ordersReducer } from "./reducers/orderReducer";
import { authReducer } from "./reducers/userReducer";


const store = configureStore({
  reducer:{
    auth:authReducer,
    cart:cartReducer,
    order:orderReducer,
    orders:ordersReducer,
    admin:adminReducer,
  },  
})


export default store;




export const server = "https://abhiburgerapp.herokuapp.com/api/v1";