import React from "react";
import formField from "./formField";
import "./inputField.css";

function InputField({
  handleOnChange,
  value,
  name,
  label,
  placeholder,
  error,
}) {
  return (
    <input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={handleOnChange}
    />
  );
}
export default formField(InputField);
