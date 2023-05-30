import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducers/authSlice";
import userReducer from "../reducers/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authSlice
  },
});

export default store;