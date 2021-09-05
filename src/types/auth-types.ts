export enum AUTH_ACTIONS_TYPE {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_USER_INFO = 'SET_USER_INFO'
}

export type AuthType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    name: string | null
    avatar: string | null
}