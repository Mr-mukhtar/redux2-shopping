import { configureStore } from "@reduxjs/toolkit";
import uiSLice from "./UI-Slice";
import cartSlice from "./CartSlice";



const store = configureStore({
    reducer:{
        ui: uiSLice.reducer,
        cart: cartSlice.reducer,
    }
})

export default store;