import { configureStore } from "@reduxjs/toolkit";
import uiSLice from "./UI-Slice";



const store = configureStore({
    reducer:{
        ui: uiSLice.reducer
    }
})

export default store;