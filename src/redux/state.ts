import {rerenderEntireTree} from "../render";
import {v1} from "uuid";

export const state: StateType = {
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
                text: 'Helloooo'
            },
            {
                src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                alt: "My profile",
                text: 'Byeeeeee'
            },
            {
                src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                alt: "My profile",
                text: 'Animeeee'
            },
            {
                src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
                alt: "My profile",
                text: 'Looooool'
            }
        ],
        newPost: {
            src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
            alt: "My profile",
            text: ''
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
}

export const addPost = () => {
    const copy = {...state.profile.newPost}
    state.profile.dataForMyPosts.unshift(copy)
    rerenderEntireTree(state)
}

export const updatePostText = (postText: string) => {
    state.profile.newPost.text = postText
    rerenderEntireTree(state)
}

export const sendMessage = () => {
    const copy = {...state.dialogs.newMessage}
    state.dialogs.dataForMessages.push(copy)
    rerenderEntireTree(state)
}

export const updateMessageText = (text: string) => {
    state.dialogs.newMessage.message = text
    rerenderEntireTree(state)
}

export type StateType = {
    sidebar: SidebarType
    profile: ProfileType
    dialogs: DialogsType
}

export type SidebarType = {
    dataForSidebar: Array<dataForSidebarType>
}

export type ProfileType = {
    dataForMyProfile: dataForMyProfileType
    dataForMyPosts: Array<dataForMyPostsType>
    newPost: dataForMyPostsType
}

export type DialogsType = {
    dataForFriends: Array<DataForFriendsType>
    dataForMessages: Array<MessagesDataType>
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