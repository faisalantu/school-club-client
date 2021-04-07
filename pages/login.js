import { connect } from "react-redux";
import { wrapper } from "../store/store";
import LoginComponent from "../components/auth/login";
const Login = (props) => {
  return (
    <>
      <LoginComponent />
    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(Login);
