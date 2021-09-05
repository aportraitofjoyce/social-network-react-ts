import {USERS_ACTIONS_TYPE, UserType} from '../../types/users-types'

export const follow = (id: string) => ({
    type: USERS_ACTIONS_TYPE.FOLLOW,
    payload: {id}
}) as const

export const setUsers = (users: UserType[]) => ({
    type: USERS_ACTIONS_TYPE.SET_USERS,
    payload: {users}
}) as const

export const setCurrentPage = (page: number) => ({
    type: USERS_ACTIONS_TYPE.SET_CURRENT_PAGE,
    payload: {page}
}) as const

export const setTotalUsersCount = (total: number) => ({
    type: USERS_ACTIONS_TYPE.SET_TOTAL_USERS_COUNT,
    payload: {total}
}) as const

export const toggleLoader = (status: boolean) => ({
    type: USERS_ACTIONS_TYPE.TOGGLE_LOADER,
    payload: {status}
}) as const

export const toggleFollowLoader = (status: boolean, id: string) => ({
    type: USERS_ACTIONS_TYPE.TOGGLE_FOLLOW_LOADER,
    payload: {status, id}
}) as const