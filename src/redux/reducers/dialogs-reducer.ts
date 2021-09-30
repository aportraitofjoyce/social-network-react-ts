import {DialogsType} from '../../types/dialogs-types'
import {DIALOGS_ACTIONS_TYPES, DialogsActionsType} from '../actions/dialogs-actions'

const initialState: DialogsType = {
    messages: []
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsType => {
    switch (action.type) {
        case DIALOGS_ACTIONS_TYPES.SET_MESSAGES:
            return {...state, messages: [...state.messages, ...action.payload.messages]}

        default:
            return state
    }
}