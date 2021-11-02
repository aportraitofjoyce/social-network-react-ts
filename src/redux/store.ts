import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk, {ThunkAction} from 'redux-thunk'
import {appReducer} from './reducers/app-reducer'
import {profileReducer} from './reducers/profile-reducer'
import {dialogsReducer} from './reducers/dialogs-reducer'
import {usersReducer} from './reducers/users-reducer'
import {authReducer} from './reducers/auth-reducer'

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const rootReducer = combineReducers(
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        users: usersReducer,
        auth: authReducer,
        app: appReducer
    }
)

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
export type ThunkType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, any>