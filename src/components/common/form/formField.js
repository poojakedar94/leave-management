import "./formField.scss";

const formField = (WrappedComponent) => {
  return function (props) {
    return (
      <div className="form-field">
        <label htmlFor={props.name}>{props.label}</label>
        <div className="form-input">
          <WrappedComponent {...props} />
          {/* {props.helpText && <div>{props.helpText}</div>} */}
        </div>
        <div className="error-message">{props.error}</div>
      </div>
    );
  };
};

export default formField;
