import * as type from '../types/user';

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case type.PROFILE:
      return {
        ...state,
        profile: action.payload ?? {},
      };

    case type.SESSION:
      return {
        ...state,
        session: action.payload ?? {},
      };

    case type.REGISTER:
      return {
        ...state,
        register: action.payload ?? {},
      };

    case type.AUTH_TEMP:
      return {
        ...state,
        authTemp: action.payload ?? {},
      };

    case type.LOADING:
      return {
        ...state,
        loadingUsr: action.payload ?? {},
      };

    case type.MESSAGE:
      return {
        ...state,
        messageUsr: action.payload ?? {},
      };
    case type.ERROR:
      return {
        ...state,
        errorUsr: action.payload ?? {},
      };

    default:
      return state;
  }
}
