import {ChatMessageType, DialogsType} from '../../types/dialogs-types'
import {v1} from 'uuid'

export enum DIALOGS_ACTIONS_TYPES {
    SET_MESSAGES = 'SET_MESSAGES',
}

export type DialogsActionsType = ReturnType<typeof setMessages>

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

export const setMessages = (messages: ChatMessageType[]) => ({
    type: DIALOGS_ACTIONS_TYPES.SET_MESSAGES,
    payload: {messages}
} as const)