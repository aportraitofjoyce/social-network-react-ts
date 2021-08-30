import {UserType} from '../../types/types'

export const FOLLOW = 'FOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_LOADER = 'TOGGLE_LOADER'
export const TOGGLE_FOLLOW_LOADER = 'TOGGLE_FOLLOW_LOADER'

export const follow = (id: string) => ({type: FOLLOW, id}) as const
export const setUsers = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (page: number) => ({type: SET_CURRENT_PAGE, page}) as const
export const setTotalUsersCount = (total: number) => ({type: SET_TOTAL_USERS_COUNT, total}) as const
export const toggleLoader = (status: boolean) => ({type: TOGGLE_LOADER, status}) as const
export const toggleFollowLoader = (status: boolean, id: string) => ({type: TOGGLE_FOLLOW_LOADER, status, id}) as const