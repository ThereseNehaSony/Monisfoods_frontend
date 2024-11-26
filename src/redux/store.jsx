import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import authReducer from './reducers/user/authSlice'
import menuReducer from './reducers/admin/menuSlice'
import selectedItemsReducer from './reducers/user/selectedItemsSlice'
export const store = configureStore({
    reducer: {
        user: userReducer,
        auth: authReducer,
        menu: menuReducer,
        selectedItems: selectedItemsReducer,
},
});