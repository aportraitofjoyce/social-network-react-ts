export type ProfileType = {
    userProfile: UserProfileType | null
    userStatus: string
}

export type UserProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    aboutMe: string
    contacts: UserProfileContactsType
    photos: UserProfilePhotosType
}

export type UserProfilePhotosType = {
    large: string | null
    small: string | null
}

export type UserProfileContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
}