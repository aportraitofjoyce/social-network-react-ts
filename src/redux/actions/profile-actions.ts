import {UserProfileType} from '../../types/profile-types'
import {ThunkType} from '../../types/common-types'
import {profileAPI} from '../../api/profile-api'

export enum PROFILE_ACTIONS_TYPES {
    ADD_POST = 'ADD_POST',
    SET_USER_PROFILE = 'SET_USER_PROFILE',
    SET_USER_STATUS = 'SET_USER_STATUS',
}

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

// Thunk
export const getUserProfile = (id: number) => async (dispatch: ThunkType) => {
    const response = await profileAPI.getUserProfile(id)
    dispatch(setUserProfile(response.data))
}

export const getUserStatus = (id: number) => async (dispatch: ThunkType) => {
    const response = await profileAPI.getUserStatus(id)
    dispatch(setUserStatus(response.data))
}

export const updateUserStatus = (userStatus: string) => async (dispatch: ThunkType) => {
    const response = await profileAPI.updateUserStatus(userStatus)
    response.data.resultCode === 0 && dispatch(setUserStatus(userStatus))
}