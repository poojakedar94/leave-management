import React from "react";
import formField from "./formField";

function TextAreaField({ placeholder, value, onChange, name }) {
  return (
    <textarea
      className="text-area-field"
      type="text-area"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      rows="4"
    ></textarea>
  );
}
export default formField(TextAreaField);
