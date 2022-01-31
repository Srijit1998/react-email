import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    loader: false,
  },
  reducers: {
    loading(state, action) {
      state.loader = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
