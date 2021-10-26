import React, { useEffect, useState } from "react";
import DropDownField from "../common/DropDownField";

function LeaveTypeDropDown({ leaveBalance }) {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const leaveOptions = leaveBalance.map((item) => ({
      label: item.name,
      value: item.id,
      isDisabled: item.value === 0,
    }));
    setOptions(leaveOptions);
  }, [leaveBalance]);
  return (
    <div className="leavetype-dropdown">
      <DropDownField options={options} name="leaveType" label="Leave Type" />
    </div>
  );
}
export default LeaveTypeDropDown;
