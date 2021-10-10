import { LOGIN_PENDING, LOGIN_SUCCESS } from "../reducers/types";

export const login = (payload) => (dispatch) => {
  dispatch({
    type: LOGIN_PENDING,
  });
  setTimeout(() => {
    dispatch({
      type: LOGIN_SUCCESS,
    });
  }, 5000);
};
