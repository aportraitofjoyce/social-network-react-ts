import {authAPI} from '../../api/auth-api'
import {ThunkType} from '../../types/common-types'

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    LOGOUT = 'LOGOUT'
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
    payload: {id, login, email}
}) as const

export const changeAuthWhenLogout = () => ({
    type: AUTH_ACTIONS_TYPE.LOGOUT
}) as const

export const checkAuth = () => async (dispatch: ThunkType) => {
    const response = await authAPI.checkAuth()
    const {id, login, email} = response.data.data
    response.data.resultCode === 0 && dispatch(setAuthUserData(id, login, email))
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: any) => async (dispatch: ThunkType) => {
    const response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        await dispatch(checkAuth())
    }

    if (response.data.resultCode !== 0) {
        setStatus(response.data.messages)
    }
}

export const logout = () => async (dispatch: ThunkType) => {
    try {
        await authAPI.logout()
        dispatch(changeAuthWhenLogout())
    } catch (e) {
        alert(e)
    }
}