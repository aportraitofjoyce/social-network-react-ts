import {UsersType} from '../../types/users-types'
import {USERS_ACTIONS_TYPES, UsersActionsType} from '../actions/users-actions'

const initialState: UsersType = {
    usersData: [],
    pageSize: 25,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false,
    followLoader: []
}

export const usersReducer = (state: UsersType = initialState, action: UsersActionsType) => {
    switch (action.type) {
        case USERS_ACTIONS_TYPES.FOLLOW:
            return {
                ...state,
                usersData: state.usersData.map((user) => user.id === action.payload.id
                    ? {...user, followed: !user.followed}
                    : user)
            }

        case USERS_ACTIONS_TYPES.SET_USERS:
            return {...state, usersData: [...action.payload.users]}

        case USERS_ACTIONS_TYPES.SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.page}

        case USERS_ACTIONS_TYPES.SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.payload.total}

        case USERS_ACTIONS_TYPES.TOGGLE_LOADER:
            return {...state, isLoading: action.payload.status}

        case USERS_ACTIONS_TYPES.TOGGLE_FOLLOW_LOADER:
            return {
                ...state,
                followLoader: action.payload.status
                    ? [...state.followLoader, action.payload.id]
                    : state.followLoader.filter(u => u !== action.payload.id)
            }

        default:
            return state
    }
}