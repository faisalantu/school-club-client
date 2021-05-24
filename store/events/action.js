import { LOGIN, LOGOUT } from "../actionsType";
import axios from "../../axios";

export const postEvent = (inputValues) => {
  console.log(inputValues);

  return (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(`http://localhost:5000/api/events`, inputValues, config)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Oo no Error!:", error);
        console.error("Error!:", error?.response?.data);
      });
  };
};

