import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
  },
});

export const { setProductsGlobal } = productsSlice.actions;

export default productsSlice.reducer;

const URL_BASE = import.meta.env.VITE_REACT_APP_URL 

export const getAllProductsThunk =
  (url = `${URL_BASE}products`) =>
  (dispatch) => {
    axios
      .get(url)
      .then((res) => dispatch(setProductsGlobal(res.data)))
      .catch((err) => console.error(err));
  };
