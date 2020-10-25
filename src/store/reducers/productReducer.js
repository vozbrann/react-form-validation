import {
  SET_PRODUCTS_LIST,
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_LOADING,
  SET_SELECTED_PRODUCT
} from '../actions/productActionsTypes';

const initialState = {
  productsList: [],
  productsListLoading: false,
  productsListError: null,
  selectedProduct: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS_LIST:
      return {...state, productsList: action.payload};
    case PRODUCTS_LIST_LOADING:
      return {...state, productsListLoading: action.payload};
    case PRODUCTS_LIST_ERROR:
      return {...state, productsListError: action.payload};
    case SET_SELECTED_PRODUCT:
      return {...state, selectedProduct: action.payload};
    default:
      return state;
  }
};
