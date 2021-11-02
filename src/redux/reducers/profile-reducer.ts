import {ThunkType} from '../store'
import {profileAPI} from '../../api/profile-api'
import {ResultCodes} from '../../types/api-types'

enum PROFILE_ACTIONS_TYPES {
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS',
    SET_USER_AVATAR = 'SET_USER_AVATAR',
}

export type ProfileActionsType =
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setUserAvatar>

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

const initialState: ProfileType = {
    userProfile: null,
    userStatus: '',
}

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfileType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPES.SET_USER_PROFILE:
            return {...state, userProfile: action.payload.userProfile,}

        case PROFILE_ACTIONS_TYPES.SET_USER_STATUS:
            return {...state, userStatus: action.payload.userStatus}

        case PROFILE_ACTIONS_TYPES.SET_USER_AVATAR:
            return {...state, userProfile: {...state.userProfile, photos: action.payload.userAvatar}} as ProfileType

        default:
            return state
    }
}

export const setUserProfile = (userProfile: UserProfileType) => ({
    type: PROFILE_ACTIONS_TYPES.SET_USER_PROFILE,
    payload: {userProfile}
} as const)

export const setUserStatus = (userStatus: string) => ({
    type: PROFILE_ACTIONS_TYPES.SET_USER_STATUS,
    payload: {userStatus}
} as const)

export const setUserAvatar = (userAvatar: UserProfilePhotosType) => ({
    type: PROFILE_ACTIONS_TYPES.SET_USER_AVATAR,
    payload: {userAvatar}
} as const)

export const getUserProfile = (id: number | null): ThunkType => async dispatch => {
    const response = await profileAPI.getUserProfile(id)
    dispatch(setUserProfile(response))
}

export const getUserStatus = (id: number | null): ThunkType => async dispatch => {
    const response = await profileAPI.getUserStatus(id)
    dispatch(setUserStatus(response))
}

export const updateUserStatus = (userStatus: string): ThunkType => async dispatch => {
    const response = await profileAPI.updateUserStatus(userStatus)
    response.resultCode === ResultCodes.Success && dispatch(setUserStatus(userStatus))
}

export const updateUserAvatar = (avatarFile: File): ThunkType => async dispatch => {
    const response = await profileAPI.updateUserAvatar(avatarFile)
    response.resultCode === ResultCodes.Success && dispatch(setUserAvatar(response.data.photos)) && alert('Успешно!')
    response.resultCode !== ResultCodes.Success && alert(response.messages)
}

export const updateUserDescription = (userDescription: UserProfileType): ThunkType =>
    async (dispatch, getState) => {
        const response = await profileAPI.updateUserDescription(userDescription)
        if (response.resultCode === ResultCodes.Success) {
            const id = getState().auth.id
            await dispatch(getUserProfile(id))
        }
    }