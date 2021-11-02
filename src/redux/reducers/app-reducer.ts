import {ThunkType} from '../store'
import {checkAuth} from './auth-reducer'

enum APP_ACTIONS_TYPES {
    SET_APP_INITIALIZED = 'APP/SET_APP_INITIALIZED'
}

export type AppActionsType = ReturnType<typeof setAppInitialized>

const initialState = {
    isInitialized: false
}

export const appReducer = (state = initialState, action: AppActionsType): typeof initialState => {
    switch (action.type) {
        case APP_ACTIONS_TYPES.SET_APP_INITIALIZED:
            return {...state, isInitialized: action.payload.status}
        default:
            return state
    }
}

export const setAppInitialized = (status: boolean) => ({
    type: APP_ACTIONS_TYPES.SET_APP_INITIALIZED, payload: {status}
} as const)

export const initialization = (): ThunkType => async dispatch => {
    dispatch(setAppInitialized(false))
    await dispatch(checkAuth())
    dispatch(setAppInitialized(true))
}