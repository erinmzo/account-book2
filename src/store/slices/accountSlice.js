import { createSlice } from "@reduxjs/toolkit";

const initialState = { month: Number(localStorage.getItem("month")) };

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    monthSet: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { add, remove, edit, monthSet } = accountSlice.actions;
export default accountSlice.reducer;
