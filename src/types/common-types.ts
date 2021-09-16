import {sendMessage} from '../redux/actions/dialogs-actions'
import {addPost, setUserAvatar, setUserProfile, setUserStatus} from '../redux/actions/profile-actions'
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowLoader,
    toggleLoader
} from '../redux/actions/users-actions'
import {changeAuthWhenLogout, setAuthUserData} from '../redux/actions/auth-actions'
import {rootReducer} from '../redux/reducers/root-reducer'
import {ThunkDispatch} from 'redux-thunk'
import {successInitialization} from '../redux/actions/app-actions'

// Routes
export enum PATH {
    ROOT = '/',
    PROFILE = '/profile',
    PROFILE_WITH_ID = '/profile/:userId?',
    DIALOGS = '/dialogs',
    USERS = '/users',
    LOGIN = '/login'
}

// State
export type StateType = ReturnType<typeof rootReducer>

// Actions
export type ActionsType =
    ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof sendMessage>
    | ReturnType<typeof follow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleLoader>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowLoader>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof changeAuthWhenLogout>
    | ReturnType<typeof successInitialization>
    | ReturnType<typeof setUserAvatar>

// Thunk
export type ThunkType = ThunkDispatch<StateType, null, ActionsType>