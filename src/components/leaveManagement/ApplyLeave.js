import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Button from "../common/Button";
import DateField from "../common/form/DateField";
import Fileinput from "../common/form/Fileinput";
import InputField from "../common/form/InputField";
import TextAreaField from "../common/form/TextAreaField";
import "./applyLeave.scss";
import LeaveTypeDropDown from "./LeaveTypeDropDown";

function ApplyLeave({ leaveBalance }) {
  const [leaveCount, setLeaveCount] = useState(null);
  const [date, setDate] = useState({
    fromDate: "",
    toDate: "",
  });
  const [reason, setReason] = useState("");

  useEffect(() => {
    if (date.fromDate && date.toDate) {
      getLeaveCount();
    }
  }, [date]);

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleDate = (e) => {
    const { name, value } = e.target;
    setDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onApply = () => {
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
        <InputField
          label="Leave count"
          value={leaveCount}
          name="leaveCount"
          disabled={true}
          classes="leave-count"
        />
      </div>
      <TextAreaField
        label="Reason:"
        name="reason"
        placeholder="Please add leave reason"
        onChange={handleReasonChange}
        value={reason}
      />
      <Fileinput />
      <Button label="Apply" onClick={onApply} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  leaveBalance: state.leave.leaveBalance,
});
export default connect(mapStateToProps, {})(ApplyLeave);
