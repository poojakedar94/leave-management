import React from "react";
import formField from "./formField";

function DateField({ name, value, handleDate, disabled = false }) {
  return (
    <input
      type="date"
      name={name}
      value={value}
      onChange={handleDate}
      disabled={disabled}
    />
  );
}
export default formField(DateField);
