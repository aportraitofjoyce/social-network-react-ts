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
export const getUserProfile = (idFromURL: number) => {
    return (dispatch: ThunkType) => {
        profileAPI.getUserProfile(idFromURL)
            .then(response => dispatch(setUserProfile(response.data)))
    }
}

export const getUserStatus = (idFromURL: number) => {
    return (dispatch: ThunkType) => {
        profileAPI.getUserStatus(idFromURL)
            .then(response => dispatch(setUserStatus(response.data)))
    }
}

export const updateUserStatus = (userStatus: string) => {
    return (dispatch: ThunkType) => {
        profileAPI.updateUserStatus(userStatus)
            .then(response => response.data.resultCode === 0 && dispatch(setUserStatus(userStatus)))
    }
}