import {combineReducers, createStore} from 'redux'
import {profileReducer} from './reducers/profile-reducer'
import {dialogsReducer} from './reducers/dialogs-reducer'
import {sidebarReducer} from './reducers/sidebar-reducer'
import {usersReducer} from './reducers/users-reducer'
import {StoreType} from '../types/types'

export const reducers = combineReducers(
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        sidebar: sidebarReducer,
        users: usersReducer
    }
)

export const store: StoreType = createStore(reducers)