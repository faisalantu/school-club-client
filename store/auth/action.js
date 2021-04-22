import { LOGIN, LOGOUT } from "../actionsType";
import axios from "axios";

export const signupAction = (inputValues) => {
  console.log(inputValues);
  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("http://localhost:5000/api/users", inputValues, config)
      .then((response) => {
        console.log("Success:", response.data);
        localStorage.setItem("token", response.data.token);
        dispatch(saveToken(response.data.token));
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

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post("http://localhost:5000/api/auth", authData, config)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        dispatch(saveToken(response.data.token));
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
      dispatch(saveToken(token));
    }
  };
};
