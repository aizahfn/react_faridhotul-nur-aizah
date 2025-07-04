// actions.js

// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

// Action creators
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: { product },
});

export const editProduct = (editedProduct) => ({
  type: EDIT_PRODUCT,
  payload: { editedProduct },
});

export const deleteProduct = (productId) => ({
  type: DELETE_PRODUCT,
  payload: { productId },
});
