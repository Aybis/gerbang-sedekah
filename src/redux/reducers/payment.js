import * as type from '../types/payment';

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case type.ALL_PAYMENT:
      return {
        ...state,
        allPayment: action.payload,
      };

    case type.GROUP_PAYMENT:
      return {
        ...state,
        groupPayment: action.payload,
      };

    case type.SELECTED_PAYMENT:
      return {
        ...state,
        selectedPayment: action.payload,
      };

    case type.LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case type.MESSAGE:
      return {
        ...state,
        message: action.payload,
      };
    case type.ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}
