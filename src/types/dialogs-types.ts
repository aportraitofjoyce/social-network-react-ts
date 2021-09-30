export type DialogsType = {
    messages: ChatMessageType[]
}

export type ChatMessageType = {
    message: string,
    photo: string,
    userId: number,
    userName: string
}