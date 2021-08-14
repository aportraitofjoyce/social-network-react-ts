import {Store} from 'redux'
import {reducers} from '../redux/store'
import {addPostAC, updatePostAC} from '../redux/actionCreators/profileAC'
import {sendMessageAC, updateMessageTextAC} from '../redux/actionCreators/dialogsAC'
import {followAC, setUsersAC} from '../redux/actionCreators/usersAC'

// Store
export type StoreType = Store & ReducersType

export type ReducersType = ReturnType<typeof reducers>

export type ActionsType =
    ReturnType<typeof addPostAC> |
    ReturnType<typeof updatePostAC> |
    ReturnType<typeof sendMessageAC> |
    ReturnType<typeof updateMessageTextAC> |
    ReturnType<typeof followAC> |
    ReturnType<typeof setUsersAC>


export type DispatchType = (action: ActionsType) => void

export type StateType = {
    sidebar: SidebarType
    profile: ProfileType
    dialogs: DialogsType
    users: UsersType
}

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
}

export type UserType = {
    id: string
    name: string
    location: {
        country: string
        city: string
    }
    avatar: string
    status: string
    follow: boolean
}