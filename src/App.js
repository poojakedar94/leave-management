import { connect } from "react-redux";
import Login from "./components/auth/Login";
import LeaveDashboard from "./components/leaveManagement/LeaveDashboard";

function App({ isLoggedIn }) {
  return <>{isLoggedIn ? <LeaveDashboard /> : <Login />}</>;
}
const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});
export default connect(mapStateToProps, {})(App);
