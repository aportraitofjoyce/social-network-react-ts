import {SEND_MESSAGE, UPDATE_MESSAGE_TEXT} from '../actions/dialogsActions'

export const sendMessageAC = () => ({type: SEND_MESSAGE}) as const
export const updateMessageTextAC = (text: string) => ({type: UPDATE_MESSAGE_TEXT, text: text}) as const