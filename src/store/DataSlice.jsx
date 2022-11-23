import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const STATUS = Object.freeze({
  LOADING: "Loading",
  SUCCESS: "Success",
  ERROR: "Error",
  IDLE: "Idle",
});

const initialState = {
  countries: [],
  status: STATUS.IDLE,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
    setCountry(state, action) {
      state.countries = action.payload;
    },
  },
});

export const { setCountry, setStatus } = countriesSlice.actions;
export default countriesSlice.reducer;

export function FetchCountries() {
  return async function FetchCountriesThunk(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      dispatch(setCountry(response.data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

export function FetchCountriesBySearch(search) {
  return async function FetchCountriesThunk(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const query =
        search !== ""
          ? `https://restcountries.com/v3.1/name/${search}`
          : "https://restcountries.com/v3.1/all";
      const response = await axios.get(query);
      dispatch(setCountry(response.data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}

export function FetchCountriesByFilter(Filter) {
  return async function FetchCountriesThunk(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await axios.get(
        `https://restcountries.com/v3.1/region/${Filter}`
      );
      dispatch(setCountry(response.data));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUS.ERROR));
    }
  };
}
