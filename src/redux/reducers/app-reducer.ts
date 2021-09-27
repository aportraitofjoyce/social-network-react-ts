import {APP_ACTIONS_TYPE, AppActionsType} from '../actions/app-actions'

const initialState = {
    initialized: false
}

type InitialStateType = typeof initialState

export const appReducer = (state = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case APP_ACTIONS_TYPE.SUCCESS_INITIALIZATION:
            return {
                ...state,
                initialized: action.payload.status
            }
        default:
            return state
    }
}