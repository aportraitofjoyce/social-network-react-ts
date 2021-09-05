export enum PROFILE_ACTIONS_TYPE {
    ADD_POST = 'ADD_POST',
    UPDATE_POST_TEXT = 'UPDATE_POST_TEXT',
    SET_USER_PROFILE = 'SET_USER_PROFILE'
}

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