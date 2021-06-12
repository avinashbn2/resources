import { createSlice } from "@reduxjs/toolkit";

export const headerSlice = createSlice({
  name: "headers",
  initialState: {
    headers: {},
  },
  reducers: {
    store: (state, { payload = {} } = {}) => {
      state.headers = { ...payload };
    },
    clear: (state) => {
      state.headers = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { store, clear } = headerSlice.actions;

export default headerSlice.reducer;
