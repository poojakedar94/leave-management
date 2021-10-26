const formField = (WrapperComponent) => {
  return function (props) {
    return (
      <div className="input-field">
        <label htmlFor={props.name}>{props.label}</label>
        <div>
          <WrapperComponent {...props} />
          {props.helpText && <div>{props.helpText}</div>}
        </div>
        <div className="error-message">{props.error}</div>
      </div>
    );
  };
};

export default formField;
