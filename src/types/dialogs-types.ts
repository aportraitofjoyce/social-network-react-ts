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