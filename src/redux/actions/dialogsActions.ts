export const SEND_MESSAGE = 'SEND_MESSAGE'
export const UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'

export const sendMessage = () => ({type: SEND_MESSAGE}) as const
export const updateMessage = (text: string) => ({type: UPDATE_MESSAGE_TEXT, text: text}) as const