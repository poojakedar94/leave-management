import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getLeaveBalance } from "../../actions/leaveManagement";

function LeaveBalance({ leaveBalance, getLeaveBalance }) {
  useEffect(() => {
    getLeaveBalance(2);
  }, []);

  return (
    <div className="leave-balance">
      <table>
        <thead>
          <tr>
            <th>Leave Type</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {leaveBalance.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const mapStateToProps = (state) => ({
  leaveBalance: state.leave.leaveBalance,
});
export default connect(mapStateToProps, { getLeaveBalance })(LeaveBalance);
