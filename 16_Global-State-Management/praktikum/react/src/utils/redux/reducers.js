// reducers.js
import { ADD_PRODUCT, EDIT_PRODUCT, DELETE_PRODUCT } from "./actions";

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      productImage: null, // Changed to null since it's no longer a File object
      productDescription: "Doe",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };

    case EDIT_PRODUCT: {
      const updatedProductsEdit = state.products.map((product) =>
        product.id === action.payload.editedProduct.id
          ? action.payload.editedProduct
          : product
      );
      return {
        ...state,
        products: updatedProductsEdit,
      };
    }

    case DELETE_PRODUCT: {
      const updatedProductsDelete = state.products.filter(
        (product) => product.id !== action.payload.productId
      );
      return {
        ...state,
        products: updatedProductsDelete,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
