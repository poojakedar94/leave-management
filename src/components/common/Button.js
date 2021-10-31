import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

function Button({ label, onClick, varient }) {
  return (
    <button className={`btn btn-${varient}`} onClick={onClick} disabled={false}>
      {label}
    </button>
  );
}

Button.defaultProps = {
  varient: "primary",
};

Button.propTypes = {
  varient: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
