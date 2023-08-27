import {
  ADD_PRODUCT,
  ADD_PRODUCT_QUANTITY,
  REMOVE_PRODUCT_QUANTITY,
} from "./actionTypes";

export const addProduct = (payload) => {
  return { type: ADD_PRODUCT, payload: payload };
};

export const addProductQuantity = (payload) => {
  return {
    type: ADD_PRODUCT_QUANTITY,
    payload: payload,
  };
};

export const removeProductQuantity = (payload) => {
  return {
    type: REMOVE_PRODUCT_QUANTITY,
    payload: payload,
  };
};
