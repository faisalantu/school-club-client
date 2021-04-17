import { connect } from 'react-redux'
import { useEffect } from 'react'

import * as actions from '../store/auth/action';
function IsAuthinticated(props) {

  const { TryAutoSignup ,isAuthenticated ,AuthValue  } = props;
    //console.log("IsAuthinticated ",isAuthenticated)
    //console.log("IsAuthinticated AuthValue= ",AuthValue)
  useEffect(() => {
    console.log("IsAuthinticated useeffect runed")
    TryAutoSignup();
  }, [TryAutoSignup]);

  return (<></>)
}
const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null,
    AuthValue: state.auth.token 
  };
};

const mapDispatchToProps = dispatch => {
  return {
    TryAutoSignup: () => dispatch(actions.authCheckState())
  };
};
export default 
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IsAuthinticated);