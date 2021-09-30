import {DialogsType} from '../../types/dialogs-types'
import {DIALOGS_ACTIONS_TYPES, DialogsActionsType} from '../actions/dialogs-actions'
import {v1} from 'uuid'

const initialState: DialogsType = {
    messages: []
}

export const dialogsReducer = (state = initialState, action: DialogsActionsType): DialogsType => {
    switch (action.type) {
        case DIALOGS_ACTIONS_TYPES.SET_MESSAGES:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    ...action.payload.messages
                        .map(message => ({...message, messageID: v1()}))
                        .filter((message, index, array) => index >= array.length - 25)
                ]
            }

        default:
            return state
    }
}