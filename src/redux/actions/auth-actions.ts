import {authAPI} from '../../api/auth-api'
import {ThunkType} from '../../types/common-types'
import {securityAPI} from '../../api/security-api'
import {ResultCodeForCaptchaType, ResultCodesTypes} from '../../types/api-types'

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    LOGOUT = 'LOGOUT',
    SET_CAPTCHA = 'SET_CAPTCHA'
}

export type AuthActionsType =
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof changeAuthWhenLogout>
    | ReturnType<typeof setCaptcha>

// Actions
export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
    payload: {id, login, email}
} as const)

export const changeAuthWhenLogout = () => ({
    type: AUTH_ACTIONS_TYPE.LOGOUT
} as const)

export const setCaptcha = (captcha: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_CAPTCHA,
    payload: {captcha}
} as const)

// Thunks
export const checkAuth = (): ThunkType => async dispatch => {
    const response = await authAPI.checkAuth()
    const {id, login, email} = response.data
    response.resultCode === ResultCodesTypes.Success && dispatch(setAuthUserData(id, login, email))
}

export const login = (email: string, password: string, rememberMe: boolean,
                      setStatus: (status: string[]) => void, captcha: string): ThunkType => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === ResultCodesTypes.Success) {
        await dispatch(checkAuth())
    } else if (response.resultCode === ResultCodeForCaptchaType.Captcha) {
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