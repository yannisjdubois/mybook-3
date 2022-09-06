import { ADD_CATEGORIE } from "../type";

const initStateCategories = [] ;

export default function (state=initStateCategories, action){

    if (action.type == ADD_CATEGORIE) {
        // return nextState
        // met à jour categories

        // action.payload est la valeur du dispatch
            return [...state, action.payload] ;


    }
        
    else {

            return state ;
        }
}