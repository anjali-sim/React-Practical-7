import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage
import authSlice from "../reducers/authSlice";
import userReducer from "../reducers/userSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authSlice);

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: persistedAuthReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
