import {combineReducers, createStore, Store} from "redux";
import {addPostAC, profileReducer, updatePostAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateMessageTextAC} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

// Reducers собираются в один объект, ключ каждого редьюсера - часть из подходящего стейта
const reducers = combineReducers(
    {
        profile: profileReducer,
        dialogs: dialogsReducer,
        sidebar: sidebarReducer
    }
)

export const store: StoreType = createStore(reducers)

export type StoreType = Store & ReducersType

export type ReducersType = ReturnType<typeof reducers>

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


/*

export type StoreType = ReturnType<typeof reducers> & {
    getState: () => StateType
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

const store: StoreType = {
    getState(): StateType {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    callSubscriber() {
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action)
        this._state.dialogs = dialogsReducer(this._state.dialogs, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber()
    },
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
                {id: v1(), name: 'Yuri'}
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
}*/