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
                {id: 1, from: 'Me', message: 'А собаку выебал бы?'},
                {id: 2, from: 'Andrei', message: 'Ну еще бы))))'},
                {id: 3, from: 'Me', message: 'Крассссиво!'},
                {id: 4, from: 'Me', message: 'А собаку выебал бы?'},
                {id: 5, from: 'Andrei', message: 'Ну еще бы))))'},
                {id: 6, from: 'Me', message: 'Крассссиво!'},
                {id: 7, from: 'Me', message: 'А собаку выебал бы?'},
                {id: 8, from: 'Andrei', message: 'Ну еще бы))))'},
                {id: 9, from: 'Me', message: 'Крассссиво!'},
            ]
        }
    }
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