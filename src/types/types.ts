import {rootReducer, store} from '../redux/store'
import {sendMessageAC, updateMessageTextAC} from '../redux/actions/dialogsActions'
import {addPostAC, updatePostAC} from '../redux/actions/profileActions'
import {followAC, setCurrentPageAC, toggleLoaderAC, setTotalUsersCountAC, setUsersAC} from '../redux/actions/usersActions'

export type StoreType = typeof store

export type ReducersType = ReturnType<typeof rootReducer>

export type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updatePostAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateMessageTextAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof setUsersAC> |
    ReturnType<typeof setCurrentPageAC> |
    ReturnType<typeof setTotalUsersCountAC> |
    ReturnType<typeof toggleLoaderAC>

export type DispatchType = (action: ActionsType) => void

export type StateType = ReturnType<typeof rootReducer>

// Sidebar
export type SidebarType = {
    dataForSidebar: dataForSidebarType[]
}

export type dataForSidebarType = {
    name: string
    link: string
}

// Profile
export type ProfileType = {
    dataForMyProfile: dataForMyProfileType
    dataForMyPosts: dataForMyPostsType[]
    newPost: dataForMyPostsType
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

// Dialogs
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

// Users
export type UsersType = {
    usersData: UserType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

export type UserType = {
    id: string
    name: string
    photos: {
        small: string
        large: string
    }
    status: string
    followed: boolean
}