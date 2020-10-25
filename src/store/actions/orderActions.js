import api from '../../utils/api';
import {
  ORDER_ERROR,
  ORDER_LOADING
} from '../actions/orderActionsTypes';
import {setSelectedProduct} from './productActions';

const orderLoading = bool => ({
  type: ORDER_LOADING,
  payload: bool,
});

const orderError = error => ({
  type: ORDER_ERROR,
  payload: error,
});

export const sendOrder = (userData) => {
  return (dispatch, getState) => {
    dispatch(orderLoading(true));
    console.log({
      product: getState().product.selectedProduct,
      user: userData
    });
    api.post(`/orders/${getState().product.selectedProduct.id}`, userData, {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((response) => {
        dispatch(setSelectedProduct(null));
      })
      .catch((error) => {
        dispatch(orderError(error));
      })
      .finally(() => {
        dispatch(orderLoading(false));
      });
  };
};
