import { connect } from "react-redux";
import { wrapper } from "../store/store";

const Login = (props) => {
  return (
    <>

    </>
  );
};

// redux setup
export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(null, mapDispatchToProps)(Login);
