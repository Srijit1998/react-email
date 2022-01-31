import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    mails: [],
    mailDetail: null,
  },
  reducers: {
    fetchMailData(state, action) {
      state.mails = action.payload;
    },
    fetchMailDetailData(state, action) {
      state.mailDetail = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice;
