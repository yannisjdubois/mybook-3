import { combineReducers } from "redux";
import login from "./login";
import compteur from "./compteur";
import dataCategories from "./dataCategories";
import dataArticles from "./dataArticles";


export default combineReducers({login,compteur,dataCategories,dataArticles});