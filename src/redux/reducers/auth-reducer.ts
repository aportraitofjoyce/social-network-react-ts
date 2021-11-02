import {ThunkType} from '../store'
import {securityAPI} from '../../api/security-api'
import {authAPI} from '../../api/auth-api'
import {ResultCodeForCaptcha, ResultCodes} from '../../types/api-types'

enum AUTH_ACTIONS_TYPES {
    SET_USER_DATA = 'AUTH/SET_USER_DATA',
    LOGOUT = 'AUTH/LOGOUT',
    SET_CAPTCHA = 'AUTH/SET_CAPTCHA'
}

export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof changeAuthWhenLogout>
    | ReturnType<typeof setCaptcha>

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean,
    captchaURL: string
}

const initialState: AuthType = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: ''
}

export const authReducer = (state = initialState, action: AuthActionsType): AuthType => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPES.SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true}

        case AUTH_ACTIONS_TYPES.LOGOUT:
            return {...state, isAuth: false}

        case AUTH_ACTIONS_TYPES.SET_CAPTCHA:
            return {...state, captchaURL: action.payload.captcha}

        default:
            return state
    }
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: AUTH_ACTIONS_TYPES.SET_USER_DATA,
    payload: {id, login, email}
} as const)

export const changeAuthWhenLogout = () => ({
    type: AUTH_ACTIONS_TYPES.LOGOUT
} as const)

export const setCaptcha = (captcha: string) => ({
    type: AUTH_ACTIONS_TYPES.SET_CAPTCHA,
    payload: {captcha}
} as const)

export const checkAuth = (): ThunkType => async dispatch => {
    const response = await authAPI.checkAuth()
    const {id, login, email} = response.data
    response.resultCode === ResultCodes.Success && dispatch(setAuthUserData(id, login, email))
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: (status: string[]) => void, captcha: string): ThunkType => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodes.Success) {
        await dispatch(checkAuth())
    } else if (response.resultCode === ResultCodeForCaptcha.Captcha) {
        setStatus(response.messages)
        await dispatch(getCaptchaURL())
    } else {
        setStatus(response.messages)
    }
}

export const logout = (): ThunkType => async dispatch => {
    try {
        await authAPI.logout()
        dispatch(changeAuthWhenLogout())
    } catch (e) {
        alert(e)
    }
}

export const getCaptchaURL = (): ThunkType => async dispatch => {
    const response = await securityAPI.getCaptchaURL()
    dispatch(setCaptcha(response))
}