import {UserType} from '../../types/types'

export const FOLLOW = 'FOLLOW'
export const SET_USERS = 'SET_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export const followAC = (id: string) => ({type: FOLLOW, id}) as const
export const setUsersAC = (users: UserType[]) => ({type: SET_USERS, users}) as const
export const setCurrentPageAC = (page: number) => ({type: SET_CURRENT_PAGE, page}) as const
export const setTotalUsersCountAC = (total: number) => ({type: SET_TOTAL_USERS_COUNT, total}) as const