import { connect } from "react-redux";
import { wrapper } from "../store/store";
import SignupComponent from "../components/auth/signup";
const Signup = (props) => {
  return (
    <>
      <SignupComponent />
    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(Signup);
