import { useRouter } from "next/router";
import { connect } from 'react-redux'
// const authWrapper = (WrappedComponent,{isAuth}) => {
//   return (props) => {
//     // checks whether we are on client / browser or server.
//     if (typeof window !== "undefined") {
//       const Router = useRouter();
//       // If there is no access token we redirect to "/login" page.
//       console.log(isAuth)
//       console.log(props.isAuth)
//       if (!isAuth) {
//         Router.replace("/login");
//         return null;
//       }

//       // If this is an accessToken we just render the component that was passed with all its props

//       return <WrappedComponent {...props} />;
//     }

//     // If we are on server, return null
//     return null;
//   };

// };
// 2 === authorize
// 1 === checking
// 0 === not authorize
const authWrapper = (props) => {
  console.log("authWrapper runes", "client", (typeof window))
  if (typeof window !== "undefined") {
    const Router = useRouter();
    // console.log("path----",Router.pathname)
    // 2 === authorize
    // 1 === checking
    // 0 === not authorize
    if (props.isAuth == 1) {
      return null
    }
    else if (props.isAuth === 2 && (Router.pathname !== "/login" && Router.pathname !== "/signup")) {
      return (<>{props.children}</>)
    }
    else if (props.isAuth === 0 && (Router.pathname === "/login" || Router.pathname === "/signup")) {
      return (<>{props.children}</>)
    }
    else if (props.isAuth === 2 && (Router.pathname === "/login" || Router.pathname === "/signup")) {
      Router.replace("/")
      return null
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
  };
};
export default connect(mapStateToProps, null)(authWrapper);
// export default authWrapper;