export enum DIALOGS_ACTIONS_TYPES {
    SEND_MESSAGE = 'SEND_MESSAGE',
}

export type DialogsActionsType =
    | ReturnType<typeof sendMessage>

// Actions
export const sendMessage = (text: string) => ({
    type: DIALOGS_ACTIONS_TYPES.SEND_MESSAGE,
    payload: {text}
} as const)