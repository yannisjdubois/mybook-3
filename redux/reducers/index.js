import { combineReducers } from "redux";
import login from "./login";
import compteur from "./compteur";
import dataCategories from "./dataCategories";

export default combineReducers({login,compteur,dataCategories});