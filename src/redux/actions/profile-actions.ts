import {UserProfilePhotosType, UserProfileType} from '../../types/profile-types'
import {ThunkType} from '../../types/common-types'
import {profileAPI} from '../../api/profile-api'

export enum PROFILE_ACTIONS_TYPES {
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS',
    SET_USER_AVATAR = 'SET_USER_AVATAR',
}

export type ProfileActionsType =
    | ReturnType<typeof addPost>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setUserAvatar>

export const addPost = (text: string) => ({
    type: PROFILE_ACTIONS_TYPES.ADD_POST,
    payload: {text}
}) as const

export const setUserProfile = (userProfile: UserProfileType) => ({
    type: PROFILE_ACTIONS_TYPES.SET_USER_PROFILE,
    payload: {userProfile}
}) as const

export const setUserStatus = (userStatus: string) => ({
    type: PROFILE_ACTIONS_TYPES.SET_USER_STATUS,
    payload: {userStatus}
}) as const

export const setUserAvatar = (userAvatar: UserProfilePhotosType) => ({
    type: PROFILE_ACTIONS_TYPES.SET_USER_AVATAR,
    payload: {userAvatar}
}) as const

// Thunk
export const getUserProfile = (id: number | null): ThunkType => async dispatch => {
    const response = await profileAPI.getUserProfile(id)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (id: number | null): ThunkType => async dispatch => {
    const response = await profileAPI.getUserStatus(id)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (userStatus: string): ThunkType => async dispatch => {
    const response = await profileAPI.updateUserStatus(userStatus)
    response.data.resultCode === 0 && dispatch(setUserStatus(userStatus))
}

export const updateUserAvatar = (avatarFile: File): ThunkType => async dispatch => {
    const response = await profileAPI.updateUserAvatar(avatarFile)
    response.data.resultCode === 0 && dispatch(setUserAvatar(response.data.data.photos)) && alert('Успешно!')
    response.data.resultCode !== 0 && alert(response.data.messages)
}

export const updateUserDescription = (userDescription: UserProfileType): ThunkType =>
    async (dispatch, getState) => {
        const response = await profileAPI.updateUserDescription(userDescription)
        if (response.data.resultCode === 0) {
            const id = getState().auth.id
            await dispatch(getUserProfile(id))
        }
    }