import * as type from '../types/donatur';

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case type.DONATUR:
      return {
        ...state,
        donatur: action.payload ?? {},
      };

    case type.TEMP_DONATUR:
      return {
        ...state,
        tempDonatur: action.payload ?? {},
      };

    case type.TEMP_BANK:
      return {
        ...state,
        tempBank: action.payload ?? {},
      };

    case type.LOADING:
      return {
        ...state,
        loading: action.payload ?? {},
      };

    case type.MESSAGE:
      return {
        ...state,
        message: action.payload ?? {},
      };

    default:
      return state;
  }
}
