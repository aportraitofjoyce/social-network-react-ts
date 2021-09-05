import {USERS_ACTIONS_TYPE, UserType} from '../../types/users-types'
import {usersAPI} from '../../api/users-api'
import {ThunkType} from '../../types/common-types'
import {followAPI} from '../../api/follow-api'

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


// Thunk
export const getUsers = (pageSize: number, currentPage: number) => {
    return (dispatch: ThunkType) => {
        dispatch(toggleLoader(true))

        usersAPI.getUsers(pageSize, currentPage)
            .then(response => {
                dispatch(toggleLoader(false))
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
            })
    }
}

export const changeCurrentPage = (page: number, pageSize: number) => {
    return (dispatch: ThunkType) => {
        dispatch(setCurrentPage(page))
        dispatch(toggleLoader(true))

        usersAPI.getUsers(pageSize, page)
            .then(response => {
                dispatch(toggleLoader(false))
                dispatch(setUsers(response.items))
            })
    }
}

export const followUser = (id: string, followed: boolean) => {
    return (dispatch: ThunkType) => {
        dispatch(toggleFollowLoader(true, id))

        if (!followed) {
            followAPI.follow(id)
                .then(() => {
                    dispatch(follow(id))
                    dispatch(toggleFollowLoader(false, id))
                })
        }

        if (followed) {
            followAPI.unfollow(id)
                .then(() => {
                    dispatch(follow(id))
                    dispatch(toggleFollowLoader(false, id))
                })
        }
    }
}