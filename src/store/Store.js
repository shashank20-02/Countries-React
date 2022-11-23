import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from "./ThemeSlice";
import CountriesReducer from "./DataSlice";
import CountryReducer from "./CountrySlice";
const store = configureStore({
  reducer: {
    theme: ThemeReducer,
    countries: CountriesReducer,
    country: CountryReducer,
  },
});

export default store;
