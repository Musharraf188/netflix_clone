import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    toggeleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export const { toggeleGptSearchView } = gptSlice.actions;
export default gptSlice.reducer;
