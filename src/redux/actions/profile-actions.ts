import {PROFILE_ACTIONS_TYPE} from '../../types/profile-types'
import {ThunkType} from '../../types/common-types'
import {profileAPI} from '../../api/profile-api'

export const addPost = () => ({
    type: PROFILE_ACTIONS_TYPE.ADD_POST
}) as const

export const updatePost = (text: string) => ({
    type: PROFILE_ACTIONS_TYPE.UPDATE_POST_TEXT,
    payload: {text}
}) as const

export const setUserProfile = (userProfile: any) => ({
    type: PROFILE_ACTIONS_TYPE.SET_USER_PROFILE,
    payload: {userProfile}
}) as const

// Thunk
export const getUserProfile = (idFromURL: string) => {
    return (dispatch: ThunkType) => {
        profileAPI.getUserProfile(idFromURL)
            .then(response => dispatch(setUserProfile(response.data)))
    }
}