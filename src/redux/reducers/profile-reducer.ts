import {ProfileType} from '../../types/profile-types'
import {PROFILE_ACTIONS_TYPES, ProfileActionsType} from '../actions/profile-actions'

const initialState: ProfileType = {
    userProfile: null,
    userStatus: '',

    dataForMyPosts: [
        {
            src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            alt: 'My profile',
            text: 'My first post',
            likes: 10
        },
        {
            src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            alt: 'My profile',
            text: 'My second post',
            likes: 5
        },
        {
            src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            alt: 'My profile',
            text: 'My third post',
            likes: 43
        },
        {
            src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            alt: 'My profile',
            text: 'My fourth post',
            likes: 0
        }
    ],

    newPost: {
        src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
        alt: 'My profile',
        text: '',
        likes: 0
    }
}

export const profileReducer = (state: ProfileType = initialState, action: ProfileActionsType): ProfileType => {
    switch (action.type) {
        case PROFILE_ACTIONS_TYPES.ADD_POST:
            return {
                ...state,
                dataForMyPosts: [{
                    ...state.newPost,
                    text: action.payload.text
                },
                    ...state.dataForMyPosts],
            }

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