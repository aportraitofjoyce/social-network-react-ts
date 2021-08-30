import {ActionsType, AuthType} from '../../types/types'
import {SET_USER_DATA, SET_USER_INFO} from '../actions/auth-actions'

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
        case SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true}

        case SET_USER_INFO:
            return {...state, ...action.payload}

        default:
            return state
    }
}