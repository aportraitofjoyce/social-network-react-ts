import {AUTH_ACTIONS_TYPE} from '../../types/auth-types'

export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_DATA,
    payload: {id, login, email}
}) as const

export const setAuthUserInfo = (name: string, avatar: string) => ({
    type: AUTH_ACTIONS_TYPE.SET_USER_INFO,
    payload: {name, avatar}
}) as const