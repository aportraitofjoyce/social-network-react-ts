import {v1} from 'uuid'

export enum DIALOGS_ACTIONS_TYPES {
    SET_MESSAGES = 'SET_MESSAGES',
}

export type DialogsActions = ReturnType<typeof setMessages>

export type DialogsType = {
    messages: ChatMessageType[]
}

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
    messageID: string
}

const initialState: DialogsType = {
    messages: []
}

export const dialogsReducer = (state = initialState, action: DialogsActions): DialogsType => {
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