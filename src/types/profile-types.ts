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
}

export type UserProfilePhotosType = {
    large: string | null
    small: string | null
}

export type dataForMyPostsType = {
    src: string
    alt: string
    text: string
    likes: number
}