export enum DIALOGS_ACTIONS_TYPE {
    SEND_MESSAGE = 'SEND_MESSAGE',
    UPDATE_MESSAGE_TEXT = 'UPDATE_MESSAGE_TEXT'
}

export type DialogsType = {
    dataForFriends: DataForFriendsType[]
    dataForMessages: MessagesDataType[]
    newMessage: MessagesDataType
}
export type DataForFriendsType = {
    id: string
    name: string
}
export type MessagesDataType = {
    id: string
    from: string
    message: string
}