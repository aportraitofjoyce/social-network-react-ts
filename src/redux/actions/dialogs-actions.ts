import {ChatMessageType} from '../../types/dialogs-types'

export enum DIALOGS_ACTIONS_TYPES {
    SET_MESSAGES = 'SET_MESSAGES',
}

export type DialogsActionsType =
    | ReturnType<typeof setMessages>

// Actions
export const setMessages = (messages: ChatMessageType[]) => ({
    type: DIALOGS_ACTIONS_TYPES.SET_MESSAGES,
    payload: {messages}
} as const)