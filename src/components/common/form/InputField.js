import React from "react";
import formField from "./formField";
import "./inputField.css";

function InputField({
  handleOnChange,
  value,
  name,
  placeholder,
  disabled = false,
  classes = "",
}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
      disabled={disabled}
      className={classes}
    />
  );
}
export default formField(InputField);
