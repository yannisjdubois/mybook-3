import { ADD_CATEGORIE } from "../type";

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

        if(state.find(item=> item.id == action.payload.id) == undefined){
            console.log(state.find(item=> item.id == action.payload.id))

            // action.payload est la valeur du dispatch
            return [...state, action.payload] ;


        }else {

            return state ;
        }

    }else {

            return state ;
        }
}