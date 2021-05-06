import { LOGIN, LOGOUT ,SAVE_USER} from "../actionsType";
import axios from "../../axios";

export const signupAction = (inputValues) => {
  //console.log(inputValues);
  return (dispatch) => {    
    axios
      .post("/users",inputValues)
      .then((response) => {
        console.log("Success:", response.data);
        localStorage.setItem("token", response.data.token);
        dispatch(saveToken(response.data.token));
        dispatch(getUser());
        window.location.href = "/";
      })
      .catch((error) => {
        console.error("Oo no Error!:", error);
        console.error("Error!:", error.response.data);
      });
  };
};
export const loginAction = (email, password) => {
  return (dispatch) => {
    const authData = {
      email: email,
      password: password,
    };
    //console.log("[email , password] ->", authData);

    // fetch('http://localhost:5000/api/auth', {
    // method: 'POST',
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(authData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     localStorage.setItem('token', data.token);
    //     dispatch(saveToken(data.token));
    //     console.log('Success:', data.token);
    // })
    // .catch((error) => {
    //     console.error('the Error:', error);
    // });
    axios
      .post("/auth", authData)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        dispatch(saveToken(response.data.token));
        dispatch(getUser());
      })
      .catch((err) => {
        console.log( err.response.data.msg);
      });
  };
};
export const saveToken = (token) => {
  return {
    type: LOGIN,
    token: token,
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: LOGOUT,
  };
};
export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      
      dispatch(logout());
    } else {
      dispatch(getUser());
      dispatch(saveToken(token));
    }
  };
};

export const getUser = () => {
  return (dispatch) => {    
    axios
      .get("/users",)
      .then((response) => {
        console.log("[getUser  -redux] Success:", response.data);

        dispatch(saveUser(response.data));
      })
      .catch((error) => {
        console.error("Oo no Error![getUser  -redux]:", error);
        console.error("Error![getUser  -redux]:", error.response.data);
      });
  };
};
export const saveUser = (userData) => {
  return {
    type: SAVE_USER,
    user: userData,
  };
};