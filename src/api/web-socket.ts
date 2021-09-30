export const webSocket = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

export const channel = () => {
    return new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')
}