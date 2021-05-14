import { connect } from "react-redux";
import SignupComponent from "../components/auth/signup";

const Signup = (props) => {
    return (
      <>
        <SignupComponent />
      </>
    );

};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     TryAutoSignup: () => dispatch(actions.authCheckState())
//   };
// };
export default connect(mapStateToProps, null)(Signup);
