import {APP_ACTIONS_TYPE, AppActionsType} from '../actions/app-actions'

type InitialStateType = {
    initialized: boolean
}

const initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
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