import {
  LEAVE_BALANCE_FAILED,
  LEAVE_BALANCE_PENDING,
  LEAVE_BALANCE_SUCCESS,
} from "./types";

const initialState = {
  leaveBalance: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LEAVE_BALANCE_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case LEAVE_BALANCE_SUCCESS: {
      return {
        ...state,
        loading: false,
        leaveBalance: action.payload,
      };
    }
    case LEAVE_BALANCE_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};
