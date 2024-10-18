// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";  // Use default import without curly braces

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
