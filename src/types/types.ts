import {rootReducer} from '../redux/store'
import {sendMessage, updateMessage} from '../redux/actions/dialogs-actions'
import {addPost, setUserProfile, updatePost} from '../redux/actions/profile-actions'
import {follow, setCurrentPage, setTotalUsersCount, setUsers, toggleLoader} from '../redux/actions/users-actions'
import {setAuthUserData, setAuthUserInfo} from '../redux/actions/auth-actions'

export type StateType = ReturnType<typeof rootReducer>

export type ActionsType =
    ReturnType<typeof addPost> |
    ReturnType<typeof updatePost> |
    ReturnType<typeof setUserProfile> |
    ReturnType<typeof sendMessage> |
    ReturnType<typeof updateMessage> |
    ReturnType<typeof follow> |
    ReturnType<typeof setUsers> |
    ReturnType<typeof setCurrentPage> |
    ReturnType<typeof setTotalUsersCount> |
    ReturnType<typeof toggleLoader> |
    ReturnType<typeof setAuthUserData> |
    ReturnType<typeof setAuthUserInfo>

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
    dataForMyPosts: dataForMyPostsType[]
    newPost: dataForMyPostsType
    userProfile: UserProfileType | null
}

export type UserProfileType = {
    userId: string | number
    fullName: string
    aboutMe: string
    photos: {
        small: string
        large: string
    }
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

// Auth
export type AuthType = AuthTypeFull | null

type AuthTypeFull = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
    name: string | null
    avatar: string | null
}