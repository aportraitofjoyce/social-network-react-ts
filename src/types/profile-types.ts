export type ProfileType = {
    dataForMyPosts: dataForMyPostsType[]
    newPost: dataForMyPostsType
    userProfile: UserProfileType | null
    userStatus: string
}
export type UserProfileType = {
    userId: number
    fullName: string
    photos: UserProfilePhotosType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    contacts: UserProfileContactsType
    aboutMe: string
}

export type UserProfilePhotosType = {
    large: string | null
    small: string | null
}

export type UserProfileContactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type dataForMyPostsType = {
    src: string
    alt: string
    text: string
    likes: number
}