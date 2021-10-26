import React from "react";
import "./dateField.css";

function DateField({ name, label, value, handleDate, disabled = false }) {
  return (
    <div className="date-field">
      <label htmlFor={name}>{label}</label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={handleDate}
        disabled={disabled}
      />
    </div>
  );
}
export default DateField;
