export const SET_USER_DATA = 'SET_USER_DATA'
export const SET_USER_INFO = 'SET_USER_INFO'


export const setAuthUserData = (id: number, login: string, email: string) => ({
    type: SET_USER_DATA,
    payload: {id, login, email}
}) as const

export const setAuthUserInfo = (name: string, avatar: string) => ({
    type: SET_USER_INFO,
    payload: {name, avatar}
}) as const