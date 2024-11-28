import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slice/cartSlice";

const rootReducer={
    cart:cartSlice
}

export default store=configureStore({
    reducer:rootReducer
})