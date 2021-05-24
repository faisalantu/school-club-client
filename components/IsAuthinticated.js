import { connect } from "react-redux";
import { useEffect, useState } from "react";

import * as actions from "../store/auth/action";
function IsAuthinticated(props) {
  // const setTimer = duration => {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       TryAutoSignup()
  //       resolve('Done!');
  //     }, duration);
  //   });
  //   return promise;
  // };
  //console.log("IsAuthinticated run", "client", (typeof window))

  const { TryAutoSignup, loading, setLoading } = props;

  useEffect(() => {
    //console.log("IsAuthinticated useeffect runed")
    // (async function auth() {
    setLoading(true);
    // console.log("setTimeout start", loading)
    // await setTimer(5000)
    TryAutoSignup();
    //setLoading(false)
    // console.log("setTimeout end", loading)
    // })()
  }, []);

  return (
    <>
      {loading ? (
        <div className="text-4xl text-center"> Loading ...</div>
      ) : null}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
    AuthValue: state.auth.token,
    AValue: state.auth.isAuth,
    loading: state.auth.loadingData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    TryAutoSignup: () => dispatch(actions.authCheckState()),
    setLoading: (loading) =>
      dispatch({ type: "SET_LOADING", loadingData: loading }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IsAuthinticated);
