import { ADD_ARTICLES } from "../type";

const initStateArticles = [
    {id:1, nom:"catégorie 1"},
    {id:2, nom:"catégorie 2"},
    {id:3, nom:"catégorie 3"},
    {id:4, nom:"catégorie 4"}
] ;

export default function (state=initStateArticles, action){

    if (action.type == ADD_ARTICLES) {
        // return nextState
        // met à jour categories

        // action.payload est la valeur du dispatch
            return [...state, action.payload] ;


    }
        
    else {

            return state ;
        }
}