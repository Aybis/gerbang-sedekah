import * as types from '../types/category';

const initialState = {
  dataCategory: [],
  isLoading: false,
  isError: false,
  dataTemp: {},
};

export default function category(state = initialState, action) {
  switch (action.type) {
    case types.CATEGORY:
      return {
        ...state,
        dataCategory: action.payload,
      };
    case types.CATEGORY_TEMP:
      return {
        ...state,
        dataTemp: action.payload,
      };
    case types.CATEGORY_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case types.CATEGORY_ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
}
