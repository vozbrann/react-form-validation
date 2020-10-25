import {
  ORDER_ERROR,
  ORDER_LOADING
} from '../actions/orderActionsTypes';

const initialState = {
  orderLoading: false,
  orderError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LOADING:
      return {...state, orderLoading: action.payload};
    case ORDER_ERROR:
      return {...state, orderError: action.payload};
    default:
      return state;
  }
};
