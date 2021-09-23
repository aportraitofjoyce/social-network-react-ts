import {authAPI} from '../../api/auth-api'
import {ThunkType} from '../../types/common-types'
import {securityAPI} from '../../api/security-api'

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    LOGOUT = 'LOGOUT',
    SET_CAPTCHA = 'SET_CAPTCHA'
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
    payload: {id, login, email}
}) as const

export const changeAuthWhenLogout = () => ({
    type: AUTH_ACTIONS_TYPE.LOGOUT
}) as const

export const setCaptcha = (captcha: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_CAPTCHA,
    payload: {captcha}
}) as const

// Thunk
export const checkAuth = (): ThunkType => async dispatch => {
    const response = await authAPI.checkAuth()
    const {id, login, email} = response.data.data
    response.data.resultCode === 0 && dispatch(setAuthUserData(id, login, email))
    // return response
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: any, captcha: string): ThunkType => async dispatch => {
    const response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        await dispatch(checkAuth())
    } else if (response.data.resultCode === 10) {
        setStatus(response.data.messages)
        await dispatch(getCaptchaURL())
    } else {
        setStatus(response.data.messages)
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
    dispatch(setCaptcha(response.data.url))
}