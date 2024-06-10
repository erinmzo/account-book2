import { createSlice } from "@reduxjs/toolkit";

const initialState = { list: [], month: Number(localStorage.getItem("month")) };

export const accountSlice = createSlice({
  name: "account",
  initialState: initialState,
  reducers: {
    add: (state, action) => {
      state.list = [...state.list, action.payload];
    },
    remove: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    edit: (state, action) => {
      state.list = state.list.map((item) => {
        if (item.id == action.payload.id) {
          return action.payload;
        }
        return item;
      });
    },
    monthSet: (state, action) => {
      state.month = action.payload;
    },
  },
});

export const { add, remove, edit, monthSet } = accountSlice.actions;
export default accountSlice.reducer;
