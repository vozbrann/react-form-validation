import api from '../../utils/api';
import {
  PRODUCTS_LIST_ERROR,
  PRODUCTS_LIST_LOADING,
  SET_PRODUCTS_LIST,
  SET_SELECTED_PRODUCT,
} from '../actions/productActionsTypes';

const setProductsList = productsList => ({
  type: SET_PRODUCTS_LIST,
  payload: productsList,
});

export const setSelectedProduct = product => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});

const productsListLoading = bool => ({
  type: PRODUCTS_LIST_LOADING,
  payload: bool,
});

const productsListError = error => ({
  type: PRODUCTS_LIST_ERROR,
  payload: error,
});

export const startFetchProducts = () => {
  return (dispatch, getState) => {
    dispatch(productsListLoading(true));
    api.get('/products', {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        dispatch(setProductsList(response.data));
      })
      .catch((error) => {
        dispatch(productsListError(error));
      })
      .finally(() => {
        dispatch(productsListLoading(false));
      });
  };
};

export const selectCheapestProduct = () => {
  return (dispatch, getState) => {
    dispatch(setSelectedProduct([...getState().product.productsList].sort(
      (a, b) => a.price - b.price)[0]));
  };
};
