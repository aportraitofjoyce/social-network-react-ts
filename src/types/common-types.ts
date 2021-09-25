import {DialogsActionsType} from '../redux/actions/dialogs-actions'
import {ProfileActionsType} from '../redux/actions/profile-actions'
import {UsersActionsType} from '../redux/actions/users-actions'
import {AuthActionsType} from '../redux/actions/auth-actions'
import {rootReducer} from '../redux/reducers/root-reducer'
import {ThunkAction} from 'redux-thunk'
import {AppActionsType} from '../redux/actions/app-actions'

// Routes
export enum PATH {
    ROOT = '/',
    PROFILE = '/profile',
    PROFILE_WITH_ID = '/profile/:userId?',
    DIALOGS = '/dialogs',
    USERS = '/users',
    LOGIN = '/login',
    ERROR = '*'
}

// State
export type StateType = ReturnType<typeof rootReducer>

// Actions
export type ActionsType =
    | UsersActionsType
    | ProfileActionsType
    | DialogsActionsType
    | AuthActionsType
    | AppActionsType

// Thunk
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, ActionsType>