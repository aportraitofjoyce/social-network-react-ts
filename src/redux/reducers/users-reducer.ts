import {ActionsType, UsersType} from '../../types/types'
import {
    FOLLOW,
    SET_CURRENT_PAGE,
    SET_TOTAL_USERS_COUNT,
    SET_USERS,
    TOGGLE_FOLLOW_LOADER,
    TOGGLE_LOADER
} from '../actions/users-actions'

const initialState: UsersType = {
    usersData: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followLoader: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionsType) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => user.id === action.id
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

        case TOGGLE_FOLLOW_LOADER:
            return {
                ...state,
                followLoader: action.status
                    ? [...state.followLoader, action.id]
                    : state.followLoader.filter(u => u !== action.id)
            }

        default:
            return state
    }
}