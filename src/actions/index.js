import axios from "axios";
import { BASE_URL } from "../config";
import { POST_LIST } from "./types";

axios.defaults.baseURL = BASE_URL;

export function getPosts() {
  return async function (dispatch) {
    const url = `/posts`;
    try {
      const postsList = await axios.get(url);
      if (postsList.data.status) {
        dispatch({
          type: POST_LIST,
          payload: postsList.data,
        });
      }
    } catch (error) {}
  };
}
