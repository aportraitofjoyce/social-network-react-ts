import {v1} from "uuid";
import {addPostAC, profileReducer, updatePostAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateMessageTextAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

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
                text: 'Что-то чтобы не вводить для тестов',
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
            newMessage: {
                id: v1(),
                from: 'Me',
                message: ''
            }
        }
    },

    _getState(): StateType {
        return this._state
    },

    _subscribe(observer) {
        this._callSubscriber = observer
    },

    _callSubscriber() {
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    },
}

// TypeScript
export type StoreType = {
    _state: StateType
    _getState: () => StateType
    _subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updatePostAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateMessageTextAC>


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