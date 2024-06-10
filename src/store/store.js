import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";

export const store = configureStore({
  reducer: {
    accountList: accountSlice,
  },
});
