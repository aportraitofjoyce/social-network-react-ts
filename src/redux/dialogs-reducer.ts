import {ActionsType, DialogsType} from "./redux-store";
import {v1} from "uuid";

const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'

const initialState: DialogsType = {
    dataForFriends: [
        {id: v1(), name: 'Me'},
        {id: v1(), name: 'Maxim'},
        {id: v1(), name: 'Andrei'},
        {id: v1(), name: 'Yura'}
    ],

    dataForMessages: [
        {id: v1(), from: 'Me', message: 'Привет, как дела?'},
        {id: v1(), from: 'Andrei', message: 'Ку-ку, отлично. А у тебя?'},
        {id: v1(), from: 'Me', message: 'Плохо, монитор из сервисного центре не отдают!'},
        {id: v1(), from: 'Me', message: 'Пользуются им уже дольше чем я'},
        {id: v1(), from: 'Andrei', message: 'Козлы'},
        {id: v1(), from: 'Me', message: 'Ага!'},
    ],
    newMessage: {
        id: v1(),
        from: 'Me',
        message: ''
    }
}

export const dialogsReducer = (state: DialogsType = initialState, action: ActionsType): DialogsType => {
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