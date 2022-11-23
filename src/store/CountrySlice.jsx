import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUS = Object.freeze({
  LOADING: "Loading",
  SUCCESS: "Success",
  ERROR: "Error",
  IDLE: "Idle",
});

const initialState = {
  data: {},
  status: STATUS.IDLE,
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountry(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export default countrySlice.reducer;
export const { setCountry, setStatus } = countrySlice.actions;

export function fetchCountry(name) {
  return async function fetchUserCountry(dispatch, getstate) {
    dispatch(setStatus(STATUS.LOADING));
    try {
      const response = await axios(
        `https://restcountries.com/v3.1/name/${name}?fullText=true`
      );
      dispatch(setCountry(response.data[0]));
      dispatch(setStatus(STATUS.SUCCESS));
    } catch (error) {
      dispatch(STATUS.ERROR);
      console.log(error);
    }
  };
}
