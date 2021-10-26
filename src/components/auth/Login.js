import React, { useState } from "react";
import { connect } from "react-redux";
import "./Login.css";
import Loader from "../common/Loader";
import { login } from "../../actions/auth";
import InputField from "../common/InputField";
import { isObjectEmpty } from "../../utils/objectUtils";

function Login({ loading, login }) {
  const [credential, setCredential] = useState({
    employeeId: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    employeeId: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleLogin = () => {
    const { employeeId, password } = credential;
    const newErrors = { ...errors };
    if (!employeeId) {
      newErrors.employeeId = "Please enter employeeID";
    }
    if (!password) {
      newErrors.password = "Please enter password";
    }
    if (isObjectEmpty(newErrors)) {
      login();
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Loader loading={loading}>
      <div className="login">
        <div className="card">
          <InputField
            name="employeeId"
            placeholder="Enter Employee Id"
            value={credential.employeeId}
            handleOnChange={handleOnChange}
            label="Employee Id:"
            error={errors.employeeId}
          />
          <InputField
            name="password"
            placeholder="Enter Password"
            value={credential.password}
            handleOnChange={handleOnChange}
            label="Password:"
            error={errors.password}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </Loader>
  );
}
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});
const enhance = connect(mapStateToProps, { login });
export default enhance(Login);
