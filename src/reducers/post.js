import { POST_LIST } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case POST_LIST:
      return action.payload.data;
    default:
      return state;
  }
}
