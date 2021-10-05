import {ProfileType} from '../../types/profile-types'
import {PROFILE_ACTIONS_TYPES, ProfileActionsType} from '../actions/profile-actions'

const initialState: ProfileType = {
    userProfile: null,
    userStatus: '',
}

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfileType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPES.SET_USER_PROFILE:
            return {
                ...state,
                userProfile: action.payload.userProfile,
            }

        case PROFILE_ACTIONS_TYPES.SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.payload.userStatus
            }

        case PROFILE_ACTIONS_TYPES.SET_USER_AVATAR:
            return {
                ...state,
                userProfile: {
                    ...state.userProfile,
                    photos: action.payload.userAvatar
                }
            } as ProfileType

        default:
            return state
    }
}