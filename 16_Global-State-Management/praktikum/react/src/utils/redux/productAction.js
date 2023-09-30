// productActions.js
import * as actionTypes from "./productActionTypes";

export const addProduct = (product) => {
  return {
    type: actionTypes.ADD_PRODUCT,
    product,
  };
};

export const deleteProduct = (productId) => {
  return {
    type: actionTypes.DELETE_PRODUCT,
    productId,
  };
};

export const updateProduct = (product) => {
  return {
    type: actionTypes.UPDATE_PRODUCT,
    product,
  };
};
