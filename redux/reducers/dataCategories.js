import { ADD_CATEGORIE } from "../type";
import { existItem } from "../../common/fonctions";

const initStateCategories = [
    {id:1, nom:"catégorie 1"},
    {id:2, nom:"catégorie 2"},
    {id:3, nom:"catégorie 3"},
    {id:4, nom:"catégorie 4"}
] ;

export default function (state=initStateCategories, action){

    if (action.type == ADD_CATEGORIE) {
        // return nextState
        // met à jour categories

        return !existItem(state, action.payload.id)?[...state, action.payload]:state ;

        //     // Syntaxe du return précédent en IF
        // if(existItem(state, action.payload.id)){

        //     // action.payload est la valeur du dispatch
        //     return [...state, action.payload] ;


        // }else {

        //     return state ;
        // }

    }else {

            return state ;
        }
}