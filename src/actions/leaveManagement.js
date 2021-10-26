import axios from "axios";
import {
  LEAVE_BALANCE_FAILED,
  LEAVE_BALANCE_PENDING,
  LEAVE_BALANCE_SUCCESS,
} from "../reducers/types";

export const getLeaveBalance = (id) => async (dispatch) => {
  try {
    dispatch({
      type: LEAVE_BALANCE_PENDING,
    });
    const res = await axios.get(`https://reqres.in/api/users/${id}`);
    const leaveBalance = [
      {
        id: "SL",
        name: "Sick Leave",
        value: 5,
      },
      {
        id: "EL",
        name: "Earned Leave",
        value: 10,
      },
      {
        id: "CL",
        name: "Casual Leave",
        value: 8,
      },
      {
        id: "CO",
        name: "Comp off",
        value: 0,
      },
    ];
    dispatch({
      type: LEAVE_BALANCE_SUCCESS,
      payload: leaveBalance,
    });
  } catch (error) {
    dispatch({
      type: LEAVE_BALANCE_FAILED,
    });
  }
};
