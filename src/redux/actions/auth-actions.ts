import axios from 'axios'
import {authAPI} from '../../api/auth-api'
import {profileAPI} from '../../api/profile-api'
import {ThunkType} from '../../types/common-types'

export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_USER_INFO = 'SET_USER_INFO',
    LOGOUT = 'LOGOUT'
}

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
    payload: {id, login, email}
}) as const

export const setAuthUserInfo = (name: string, avatar: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_INFO,
    payload: {name, avatar}
}) as const

export const changeAuthWhenLogout = () => ({
    type: AUTH_ACTIONS_TYPE.LOGOUT
}) as const

export const checkAuthAndGetProfile = () => {
    return (dispatch: ThunkType) => {
        axios
            .all([authAPI.checkAuth(), profileAPI.getUserProfile()])

            .then(axios.spread((...responses) => {
                const {id, login, email} = responses[0].data.data
                responses[0].data.resultCode === 0 && dispatch(setAuthUserData(id, login, email))
                responses[0] && dispatch(setAuthUserInfo(responses[1].data.fullName, responses[1].data.photos.small))
            }))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, setStatus: any) => {
    return async (dispatch: ThunkType) => {
        const loginResponse = await authAPI.login(email, password, rememberMe)
        loginResponse.data.resultCode !== 0 && setStatus(loginResponse.data.messages)
        await loginResponse.data.resultCode === 0 && dispatch(checkAuthAndGetProfile())
    }
}

export const logout = () => {
    return async (dispatch: ThunkType) => {
        await authAPI.logout()
        dispatch(changeAuthWhenLogout())
    }
}