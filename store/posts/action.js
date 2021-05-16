import axios from "../../axios";
import { logout } from "../auth/action";

export const addPosts = (inputValues) => {
  console.log(inputValues);
  return (dispatch) => {
    axios
      .post(`/posts`, inputValues)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Oo no Error!:", error);
        console.error("Error!:", error?.response?.data);
      });
  };
};
export const editPost = (inputValues,postId) => {
  console.log(inputValues);
  return (dispatch) => {
    axios
      .put(`/posts/one?postId=${postId}`, inputValues)
      .then((response) => {
        console.log("Success:", response.data);
      })
      .catch((error) => {
        console.error("Oo no Error!:", error);
        console.error("Error!:", error?.response?.data);
      });
  };
};
