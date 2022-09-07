import { ADD_ARTICLES, ADD_CATEGORIE, EDIT_LOGIN } from "./type";

import { COUNT_NUMB } from "./type";

export const editlogin = (login) => ({

    type : EDIT_LOGIN,
    payload : login

})

export const countNumb = (compteur) => ({

    type : COUNT_NUMB,
    payload : compteur

})

export const addCategorie = (categorie) => ({

    type : ADD_CATEGORIE,
    payload : categorie

})

export const addArticle = (article) => ({

    type : ADD_ARTICLES,
    payload : article

})