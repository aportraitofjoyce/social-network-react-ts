import {ActionsType, DialogsType} from "./state";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

export const dialogsReducer = (state: DialogsType, action: ActionsType): DialogsType => {
    const _sendMessage = () => state.dataForMessages = [...state.dataForMessages, {...state.newMessage}]
    const _updateMessageText = (text: string) => state.newMessage.message = text

    switch (action.type) {
        case SEND_MESSAGE:
            _sendMessage()
            return state
        case UPDATE_MESSAGE_TEXT:
            _updateMessageText(action.text)
            return state
        default:
            return state
    }
}

export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const
export const updateMessageTextAC = (text: string) => ({type: UPDATE_MESSAGE_TEXT, text: text}) as const