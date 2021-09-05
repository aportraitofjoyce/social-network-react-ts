import {ActionsType} from '../../types/common-types'
import {AUTH_ACTIONS_TYPE, AuthType} from '../../types/auth-types'

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    name: null,
    avatar: null
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPE.SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true}

        case AUTH_ACTIONS_TYPE.SET_USER_INFO:
            return {...state, ...action.payload}

        default:
            return state
    }
}