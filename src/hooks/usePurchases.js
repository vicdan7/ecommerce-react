import axios from "axios";
import getConfigToken from "../utils/getConfigToken";
import { getAllProductsCartThunk } from "../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const usePurchases = () => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_URL //
  const [purchases, setPurchases] = useState();
  const dispatch = useDispatch();
  const url = `${URL_BASE}purchases`;  //

  const buyThisCart = () => {
    axios
      .post(url, {}, getConfigToken())
      .then(() => {
        dispatch(getAllProductsCartThunk());
      })
      .catch((err) => console.error(err));
  };

  const getAllProductsPurchased = () => {
    axios
      .get(url, getConfigToken())
      .then((response) => {
        setPurchases(response?.data);
      })
      .catch((err) => console.error(err));
  };

  return { purchases, getAllProductsPurchased, buyThisCart };
};

export default usePurchases;
