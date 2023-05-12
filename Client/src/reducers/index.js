import { combineReducers } from "redux";
import auth from "./auth";
import posts from "./posts";

// export default combineReducers({
//   // posts: posts,  =
//   posts,
// });

export const reducers = combineReducers({ posts, auth });
