// productReducer.js
import * as actionTypes from "./productActionTypes";

const initialState = {
  products: [],
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case actionTypes.DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.productId
        ),
      };
    case actionTypes.UPDATE_PRODUCT:
      // Implement the update logic here if needed
      return state;
    default:
      return state;
  }
};

export default productReducer;
