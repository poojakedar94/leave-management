import React, { useState } from "react";
import { connect } from "react-redux";
import "./Login.css";
import Loader from "../common/Loader";
import { login } from "../../actions/auth";

function Login({ loading, login }) {
  const [credential, setCredential] = useState({
    employeeId: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredential((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    login();
  };

  return (
    <Loader loading={loading}>
      <div className="login">
        <div className="card">
          <div className="input-field">
            <label htmlFor="employeeId">Employee Id:</label>
            <input
              type="text"
              name="employeeId"
              placeholder="Enter Employee Id"
              value={credential.employeeId}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={credential.password}
              onChange={handleOnChange}
            />
          </div>
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
