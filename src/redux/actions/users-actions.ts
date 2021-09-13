import {UserType} from '../../types/users-types'
import {usersAPI} from '../../api/users-api'
import {ThunkType} from '../../types/common-types'
import {followAPI} from '../../api/follow-api'

export enum USERS_ACTIONS_TYPES {
    FOLLOW = 'FOLLOW',
    SET_USERS = 'SET_USERS',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT',
    TOGGLE_LOADER = 'TOGGLE_LOADER',
    TOGGLE_FOLLOW_LOADER = 'TOGGLE_FOLLOW_LOADER'
}

export const follow = (id: string) => ({
    type: USERS_ACTIONS_TYPES.FOLLOW,
    payload: {id}
}) as const

export const setUsers = (users: UserType[]) => ({
    type: USERS_ACTIONS_TYPES.SET_USERS,
    payload: {users}
}) as const

export const setCurrentPage = (page: number) => ({
    type: USERS_ACTIONS_TYPES.SET_CURRENT_PAGE,
    payload: {page}
}) as const

export const setTotalUsersCount = (total: number) => ({
    type: USERS_ACTIONS_TYPES.SET_TOTAL_USERS_COUNT,
    payload: {total}
}) as const

export const toggleLoader = (status: boolean) => ({
    type: USERS_ACTIONS_TYPES.TOGGLE_LOADER,
    payload: {status}
}) as const

export const toggleFollowLoader = (status: boolean, id: string) => ({
    type: USERS_ACTIONS_TYPES.TOGGLE_FOLLOW_LOADER,
    payload: {status, id}
}) as const


// Thunk
export const getUsers = (pageSize: number, currentPage: number) => async (dispatch: ThunkType) => {
    dispatch(toggleLoader(true))

    const response = await usersAPI.getUsers(pageSize, currentPage)
    dispatch(toggleLoader(false))
    dispatch(setUsers(response.items))
    dispatch(setTotalUsersCount(response.totalCount))
}

export const changeCurrentPage = (page: number, pageSize: number) => async (dispatch: ThunkType) => {
    dispatch(setCurrentPage(page))
    dispatch(toggleLoader(true))

    const response = await usersAPI.getUsers(pageSize, page)
    dispatch(toggleLoader(false))
    dispatch(setUsers(response.items))
}

export const followUser = (id: string, followed: boolean) => async (dispatch: ThunkType) => {
    dispatch(toggleFollowLoader(true, id))

    if (!followed) {
        await followAPI.follow(id)
        dispatch(follow(id))
        dispatch(toggleFollowLoader(false, id))
    }

    if (followed) {
        await followAPI.unfollow(id)
        dispatch(follow(id))
        dispatch(toggleFollowLoader(false, id))
    }
}