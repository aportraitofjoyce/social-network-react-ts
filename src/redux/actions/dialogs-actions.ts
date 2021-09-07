export enum DIALOGS_ACTIONS_TYPES {
    SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
}

export const sendMessage = () => ({
    type: DIALOGS_ACTIONS_TYPES.SEND_MESSAGE
}) as const

export const updateMessage = (text: string) => ({
    type: DIALOGS_ACTIONS_TYPES.UPDATE_MESSAGE_TEXT,
    payload: {text}
}) as const