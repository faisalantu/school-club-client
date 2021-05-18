import { useRouter } from "next/router";
import { connect } from 'react-redux'
// 2 === authorize
// 1 === checking
// 0 === not authorize
const authWrapper = (props) => {
  console.log("authWrapper runes", "client", (typeof window))
  if (typeof window !== "undefined") {
    const Router = useRouter();
    const validAdminRouteFormat = /\/admin/;
    // console.log("path----",Router.pathname)
    // 2 === authorize
    // 1 === checking
    // 0 === not_authorize
    if (props.isAuth == 1) {
      return null
    }
    else if (props.isAuth === 0 && (Router.pathname === "/login" || Router.pathname === "/signup")) {
      return (<>{props.children}</>)
    }
    else if (props.isAuth === 2 && (Router.pathname === "/login" || Router.pathname === "/signup")) {
      Router.replace("/")
      return null
    }
    else if (props.isAuth === 2 && validAdminRouteFormat.test(Router.pathname)) {
      if (props.user.isAdmin || props.user.isPrecedent) {
        return (<>{props.children}</>)
      }
      else{
        Router.replace("/")
        return null
      }

    }
    else if (props.isAuth === 2 && (Router.pathname !== "/login" && Router.pathname !== "/signup")) {
      return (<>{props.children}</>)
    }

    else {
      Router.replace("/login")
      return null
    }
  }
  return null;

};
const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    user: state.auth.user,
  };
};
export default connect(mapStateToProps, null)(authWrapper);
// export default authWrapper;