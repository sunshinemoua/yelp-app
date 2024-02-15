import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { setLocation } = navSlice.actions;
export default navSlice.reducer;
