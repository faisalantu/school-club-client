import { LOGIN, LOGOUT } from "../actionsType";
import axios from "axios";
import config from '../../config'

export const addPosts = (inputValues) => {
  console.log(inputValues);

  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`http://localhost:5000/api/posts`, inputValues, config)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Oo no Error!:", error);
        console.error("Error!:", error?.response?.data);
      });
  };
};

