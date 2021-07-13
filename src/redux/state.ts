import {rerenderEntireTree} from "../render";


export const state: StateType = {
    header: {
        dataForHeader: {
            href: '/profile',
            src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            alt: 'Mini profile'
        }
    },

    content: {
        sidebar: {
            dataForSidebar: [
                {name: 'My profile', link: '/profile'},
                {name: 'Messages', link: '/dialogs'},
                {name: 'Friends', link: '/friends'},
                {name: 'News', link: '/news'},
                {name: 'Settings', link: '/settings'}
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
            ]
        },

        dialogs: {
            dataForFriends: [
                {id: 1, name: 'Me'},
                {id: 2, name: 'Maxim'},
                {id: 3, name: 'Andrei'},
                {id: 4, name: 'Yura'}
            ],

            dataForMessages: [
                {id: 1, from: 'Me', message: 'Привет, как дела?'},
                {id: 2, from: 'Andrei', message: 'Ку-ку, отлично. А у тебя?'},
                {id: 3, from: 'Me', message: 'Плохо, монитор из сервисного центре не отдают!'},
                {id: 4, from: 'Me', message: 'Пользуются им уже дольше чем я'},
                {id: 5, from: 'Andrei', message: 'Козлы'},
                {id: 6, from: 'Me', message: 'Ага!'},
            ]
        }
    }
}

export const addPost = (postText: string) => {
    const newPost: dataForMyPostsType = {
        src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
        alt: "My profile",
        text: postText
    }
    state.content.profile.dataForMyPosts.unshift(newPost)
    rerenderEntireTree(state)
}

export type StateType = {
    header: HeaderType
    content: ContentType
}

export type HeaderType = {
    dataForHeader: dataForHeaderType
}

export type dataForHeaderType = {
    href: string
    src: string
    alt: string
}

export type ContentType = {
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
}

export type DialogsType = {
    dataForFriends: Array<DataForFriendsType>
    dataForMessages: Array<MessagesDataType>
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
    id: number
    name: string
}

export type MessagesDataType = {
    id: number
    from: string
    message: string
}