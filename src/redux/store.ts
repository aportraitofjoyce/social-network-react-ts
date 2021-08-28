import {combineReducers, createStore} from 'redux'
import {profileReducer} from './reducers/profile-reducer'
import {dialogsReducer} from './reducers/dialogs-reducer'
import {sidebarReducer} from './reducers/sidebar-reducer'
import {usersReducer} from './reducers/users-reducer'
import {authReducer} from './reducers/auth-reducer'

export const rootReducer = combineReducers(
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer
    }
)

export const store = createStore(rootReducer)