import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DateField from "../common/DateField";
import "./applyLeave.scss";
import LeaveTypeDropDown from "./LeaveTypeDropDown";

function ApplyLeave({ leaveBalance }) {
  const [leaveCount, setLeaveCount] = useState(null);
  const [date, setDate] = useState({
    fromDate: "",
    toDate: "",
  });

  useEffect(() => {
    if (date.fromDate && date.toDate) {
      getLeaveCount();
    }
  }, [date]);

  const handleDate = (e) => {
    const { name, value } = e.target;
    setDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleButton = () => {
    console.log(date);
  };

  const getLeaveCount = () => {
    const { fromDate, toDate } = date;
    const date1 = new Date(fromDate);
    const date2 = new Date(toDate);
    const diffTime = Math.abs(date1 - date2);
    const diffDay = Math.ceil(diffTime / (24 * 60 * 60 * 1000));
    setLeaveCount(diffDay);
  };

  return (
    <div className="leave-container">
      <div className="leave-dashboard">
        <LeaveTypeDropDown leaveBalance={leaveBalance} />
        <div className="date-selector">
          <DateField
            label="From date"
            name="fromDate"
            value={date.fromDate}
            handleDate={handleDate}
          />
          <DateField
            label="To date"
            name="toDate"
            value={date.toDate}
            handleDate={handleDate}
            disabled={!date.fromDate}
          />
          <div>Leave Count {leaveCount}</div>
        </div>
        <button className="apply-btn" onClick={handleButton}>
          Apply
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  leaveBalance: state.leave.leaveBalance,
});
export default connect(mapStateToProps, {})(ApplyLeave);
