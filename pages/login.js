import { useRouter } from "next/router";
import { connect } from "react-redux";
import { useEffect } from "react";
import LoginComponent from "../components/auth/login";
const Login = (props) => {
  //console.log("login runed","client",(typeof window))
  const router = useRouter();
  // useEffect(() => {

  //   if (props.isAuthenticated) {
  //       router.replace('/');
  //   }

  // }, [props.isAuthenticated]);
  // if(props.isAuthenticated)
  // {
  //   return <p className="text-center text-8xl">Loading...</p>;
  // }else{
  //    return (
  //   <>

  //     <LoginComponent />
  //   </>
  //   );
  // }
  return (
    <>
      {/* {props.isAuthenticated 
       ?<p className="text-center text-8xl">Loading...</p>
       :<LoginComponent />} */}
      <LoginComponent />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, null)(Login);
