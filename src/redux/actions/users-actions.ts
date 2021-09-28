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
    TOGGLE_FOLLOW_LOADER = 'TOGGLE_FOLLOW_LOADER',
    SET_SEARCH_PARAMS = 'SET_SEARCH_PARAMS'
}

export type UsersActionsType =
    | ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleLoader>
    | ReturnType<typeof toggleFollowLoader>
    | ReturnType<typeof setSearchParams>


// Actions
export const follow = (id: number) => ({
    type: USERS_ACTIONS_TYPES.FOLLOW,
    payload: {id}
} as const)

export const setUsers = (users: UserType[]) => ({
    type: USERS_ACTIONS_TYPES.SET_USERS,
    payload: {users}
} as const)

export const setCurrentPage = (page: number) => ({
    type: USERS_ACTIONS_TYPES.SET_CURRENT_PAGE,
    payload: {page}
} as const)

export const setTotalUsersCount = (total: number) => ({
    type: USERS_ACTIONS_TYPES.SET_TOTAL_USERS_COUNT,
    payload: {total}
} as const)

export const toggleLoader = (status: boolean) => ({
    type: USERS_ACTIONS_TYPES.TOGGLE_LOADER,
    payload: {status}
} as const)

export const toggleFollowLoader = (status: boolean, id: number) => ({
    type: USERS_ACTIONS_TYPES.TOGGLE_FOLLOW_LOADER,
    payload: {status, id}
} as const)

export const setSearchParams = (term: string, followers: boolean | null) => ({
    type: USERS_ACTIONS_TYPES.SET_SEARCH_PARAMS,
    payload: {term, followers}
} as const)


// Thunks
export const requestUsers = (page: number, pageSize: number, term: string = '', followers: boolean | null = null): ThunkType => async dispatch => {
    try {
        dispatch(toggleLoader(true))

        const response = await usersAPI.requestUsers(page, pageSize, term, followers)
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(setCurrentPage(page))
        dispatch(setSearchParams(term, followers))

        dispatch(toggleLoader(false))
    } catch (e) {
        alert(e)
    }
}

export const changeCurrentPage = (page: number, pageSize: number, term: string, followers: boolean | null): ThunkType => async dispatch => {
    dispatch(setCurrentPage(page))
    dispatch(requestUsers(page, pageSize, term, followers))
}

export const followUser = (id: number, followed: boolean): ThunkType => async dispatch => {
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