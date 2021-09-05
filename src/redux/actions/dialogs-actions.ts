import {DIALOGS_ACTIONS_TYPE} from '../../types/dialogs-types'

export const sendMessage = () => ({
    type: DIALOGS_ACTIONS_TYPE.SEND_MESSAGE
}) as const

export const updateMessage = (text: string) => ({
    type: DIALOGS_ACTIONS_TYPE.UPDATE_MESSAGE_TEXT,
    payload: {text}
}) as const