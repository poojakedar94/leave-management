import React from "react";
import Select from "react-select";
import "./dropdownField.css";
import formField from "./formField";

function DropDownField({ options }) {
  return <Select options={options} />;
}
export default formField(DropDownField);
