import { connect } from "react-redux";
import Login from "./components/auth/Login";
import ApplyLeave from "./components/leaveManagement/ApplyLeave";

function App({ isLoggedIn }) {
  return <>{isLoggedIn ? <ApplyLeave /> : <Login />}</>;
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});
export default connect(mapStateToProps, {})(App);
