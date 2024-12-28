import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    addLanguages: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addLanguages } = configSlice.actions;
export default configSlice.reducer;
