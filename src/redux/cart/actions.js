import { RECOVER_PRODUCT_QUANTITY } from "../Product/actionTypes";
import { ADD_TO_CART, DELETE_CART, REMOVE_CART } from "./actionTypes";

export const addCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeCart = (product) => {
  return {
    type: REMOVE_CART,
    payload: product,
  };
};

export const deleteCart = (product) => {
  return {
    type: DELETE_CART,
    payload: product,
  };
};

export const recoverProductQuantity = (product) => {
  return {
    type: RECOVER_PRODUCT_QUANTITY,
    payload: product,
  };
};
