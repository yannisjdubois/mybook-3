import { EDIT_LOGIN } from "./type";

import { COUNT_NUMB } from "./type";

export const editlogin = (login) => ({

    type : EDIT_LOGIN,
    payload : login

})

export const countNumb = (compteur) => ({

    type : COUNT_NUMB,
    payload : compteur

})