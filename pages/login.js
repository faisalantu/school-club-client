import { useRouter } from 'next/router';
import { connect } from 'react-redux'
import { useEffect } from 'react';
import LoginComponent from "../components/auth/login";
const Login = (props) => {
  const router = useRouter();
  useEffect(() => {
    
    if (props.isAuthenticated) {
        router.replace('/');
    }

  }, [props.isAuthenticated]);
  if(props.isAuthenticated)
  {
    return <p className="text-center text-8xl">Loading...</p>;
  }else{
     return (
    <>
      <LoginComponent />
    </>
    );
  }
 
};
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

export default 
  connect(
    mapStateToProps,
    null
  )(Login);

