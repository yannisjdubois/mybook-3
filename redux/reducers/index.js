import { combineReducers } from "redux";
import login from "./login";
import compteur from "./compteur";
import categories from "./categories";

export default combineReducers({login,compteur,categories});