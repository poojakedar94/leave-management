import React from "react";
import ApplyLeave from "./ApplyLeave";
import LeaveBalance from "./LeaveBalance";
import "./leaveDashboard.scss";

function LeaveDashboard() {
  return (
    <div className="leave-dashboard">
      <h1>Apply Leave</h1>
      <div className="leave-dashboard-container">
        <ApplyLeave />
        <LeaveBalance />
      </div>
    </div>
  );
}
export default LeaveDashboard;
