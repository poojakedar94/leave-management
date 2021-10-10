import { LOGIN_PENDING, LOGIN_SUCCESS } from "./types";

const initialState = {
  isLoggedIn: false,
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
      };
    }
    default:
      return state;
  }
};
