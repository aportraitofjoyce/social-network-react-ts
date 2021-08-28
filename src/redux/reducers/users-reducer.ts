import {ActionsType, UsersType} from '../../types/types'
import {FOLLOW, SET_CURRENT_PAGE, TOGGLE_LOADER, SET_TOTAL_USERS_COUNT, SET_USERS} from '../actions/users-actions'

const initialState: UsersType = {
    usersData: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData
                    .map((user) => user.id === action.id
                        ? {...user, followed: !user.followed}
                        : user)
            }

        case SET_USERS:
            return {...state, usersData: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.total}

        case TOGGLE_LOADER:
            return {...state, isLoading: action.status}

        default:
            return state
    }
}