import {v1} from "uuid";

export const store: StoreType = {
    _state: {
        sidebar: {
            dataForSidebar: [
                {name: 'My profile', link: '/profile'},
                {name: 'Messages', link: '/dialogs'},
            ]
        },

        profile: {
            dataForMyProfile: {
                src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                alt: "My profile",
                title: 'Илья Садовский'
            },
            dataForMyPosts: [
                {
                    src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                    alt: "My profile",
                    text: 'My first post',
                    likes: 10
                },
                {
                    src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                    alt: "My profile",
                    text: 'My second post',
                    likes: 5
                },
                {
                    src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                    alt: "My profile",
                    text: 'My third post',
                    likes: 43
                },
                {
                    src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                    alt: "My profile",
                    text: 'My fourth post',
                    likes: 0
                }
            ],
            newPost: {
                src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                alt: "My profile",
                text: '',
                likes: 0
            }
        },

        dialogs: {
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

            newMessage: {id: v1(), from: 'Me', message: ''}
        }
    },
    _callSubscriber() {
    },

    getState() {
        return this._state
    },
    // Принимает rerenderEntireTree и дает привязку пустой функции _callSubscriber для перевызова и отрисовки
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST':
                this._addPost();
                break
            case 'UPDATE-POST-TEXT':
                this._updatePostText(action.postText);
                break
            case 'SEND-MESSAGE':
                this._sendMessage();
                break
            case 'UPDATE-MESSAGE-TEXT':
                this._updateMessageText(action.text);
                break
        }
    },

    _addPost() {
        const copyOfNewPost = {...this._state.profile.newPost}
        this._state.profile.dataForMyPosts.unshift(copyOfNewPost)
        this._callSubscriber()
    },

    _updatePostText(postText: string) {
        this._state.profile.newPost.text = postText
        this._callSubscriber()
    },

    _sendMessage() {
        const copyOfNewMessage = {...this._state.dialogs.newMessage}
        this._state.dialogs.dataForMessages.push(copyOfNewMessage)
        this._callSubscriber()
    },

    _updateMessageText(text: string) {
        store._state.dialogs.newMessage.message = text
        store._callSubscriber()
    }
}


type StoreType = {
    _state: StateType
    getState: () => StateType
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: any) => void
    _addPost: () => void
    _updatePostText: (postText: string) => void
    _sendMessage: () => void
    _updateMessageText: (text: string) => void

}

export type StateType = {
    sidebar: SidebarType
    profile: ProfileType
    dialogs: DialogsType
}

export type SidebarType = {
    dataForSidebar: dataForSidebarType[]
}

export type ProfileType = {
    dataForMyProfile: dataForMyProfileType
    dataForMyPosts: dataForMyPostsType[]
    newPost: dataForMyPostsType
}

export type DialogsType = {
    dataForFriends: DataForFriendsType[]
    dataForMessages: MessagesDataType[]
    newMessage: MessagesDataType
}

export type dataForSidebarType = {
    name: string
    link: string
}

export type dataForMyProfileType = {
    src: string
    alt: string
    title: string
}

export type dataForMyPostsType = {
    src: string
    alt: string
    text: string
    likes: number
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