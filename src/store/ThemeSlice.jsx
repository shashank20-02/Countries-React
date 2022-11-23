import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "Light",
};

const ThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    settheme(state, action) {
      state.theme = action.payload;
    },
  },
});

export default ThemeSlice.reducer;
export const { settheme } = ThemeSlice.actions;
