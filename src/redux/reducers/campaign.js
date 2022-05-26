import * as type from '../types/campaign';

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case type.ALL_CAMPAIGN:
      return {
        ...state,
        allCampaign: action.payload ?? {},
      };

    case type.SELECTED_CAMPAIGN:
      return {
        ...state,
        selectedCampaign: action.payload,
      };

    case type.LOADING:
      return {
        ...state,
        isLoading: action.payload ?? {},
      };

    case type.ERROR:
      return {
        ...state,
        isError: action.payload ?? {},
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
