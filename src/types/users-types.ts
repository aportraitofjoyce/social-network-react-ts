export enum USERS_ACTIONS_TYPE {
    FOLLOW = 'FOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_LOADER = 'TOGGLE_LOADER',
    TOGGLE_FOLLOW_LOADER = 'TOGGLE_FOLLOW_LOADER'
}

export type UsersType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followLoader: string[]
}
export type UserType = {
    id: string
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}