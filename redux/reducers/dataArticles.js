import { ADD_ARTICLES } from "../type";
import { existItem } from "../../common/fonctions";

const initStateArticles = [
    // {id:1, nom:"article 1"},
    // {id:2, nom:"article 2"},
    // {id:3, nom:"article 3"},
    // {id:4, nom:"article 4"}
] ;

export default function (state=initStateArticles, action){

    if (action.type == ADD_ARTICLES) {
        // return nextState
        // met à jour categories

        return !existItem(state, action.payload.id)?[...state, action.payload]:state ;


    }
        
    else {

            return state ;
        }
}