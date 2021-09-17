import {ActionsType} from '../../types/common-types'
import {AuthType} from '../../types/auth-types'
import {AUTH_ACTIONS_TYPE} from '../actions/auth-actions'

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: ''
}

export const authReducer = (state: AuthType = initialState, action: ActionsType): AuthType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPE.SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true}

        case AUTH_ACTIONS_TYPE.LOGOUT:
            return {...state, isAuth: false}

        case AUTH_ACTIONS_TYPE.SET_CAPTCHA:
            return {...state, captchaURL: action.payload.captcha}

        default:
            return state
    }
}