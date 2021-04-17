import { useRouter } from 'next/router';
import { connect } from 'react-redux'
import { useEffect } from 'react';
import SignupComponent from "../components/auth/signup";
const Signup = (props) => {
  const router = useRouter();
  useEffect(() => {
    
    if (props.isAuthenticated) {
        router.replace('/');
    }

  }, [props.isAuthenticated]);
  if(!props.isAuthenticated)
  {
    return (<>
      <SignupComponent />
    </>);
  }else{
  return (
     <p className="text-center text-8xl">Loading...</p>);
    }
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,

  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     TryAutoSignup: () => dispatch(actions.authCheckState())
//   };
// };
export default 
  connect(
    mapStateToProps,
    null
  )(Signup);

