import {UserProfilePhotosType, UserProfileType} from '../../types/profile-types'
import {ThunkType} from '../../types/common-types'
import {profileAPI} from '../../api/profile-api'
import {ResultCodesTypes} from '../../types/api-types'

export enum PROFILE_ACTIONS_TYPES {
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS',
    SET_USER_AVATAR = 'SET_USER_AVATAR',
}

export type ProfileActionsType =
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserStatus>
    | ReturnType<typeof setUserAvatar>


// Actions
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


// Thunks
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
    response.resultCode === ResultCodesTypes.Success && dispatch(setUserStatus(userStatus))
}

export const updateUserAvatar = (avatarFile: File): ThunkType => async dispatch => {
    const response = await profileAPI.updateUserAvatar(avatarFile)
    response.resultCode === ResultCodesTypes.Success && dispatch(setUserAvatar(response.data.photos)) && alert('Успешно!')
    response.resultCode !== ResultCodesTypes.Success && alert(response.messages)
}

export const updateUserDescription = (userDescription: UserProfileType): ThunkType =>
    async (dispatch, getState) => {
        const response = await profileAPI.updateUserDescription(userDescription)
        if (response.resultCode === ResultCodesTypes.Success) {
            const id = getState().auth.id
            await dispatch(getUserProfile(id))
        }
    }