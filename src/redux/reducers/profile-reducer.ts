import {ActionsType, ProfileType} from '../../types/types'
import {ADD_POST, SET_USER_PROFILE, UPDATE_POST_TEXT} from '../actions/profileActions'

const initialState: ProfileType = {
    dataForMyProfile: {
        userId: '1',
        fullName: 'Илья Садовский',
        aboutMe: 'Blablabla',
        photos: {
            small: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
            large: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album'
        }
    },
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
        text: 'Что-то чтобы не вводить для тестов',
        likes: 0
    },
    userProfile: null
}

export const profileReducer = (state: ProfileType = initialState, action: ActionsType): ProfileType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                dataForMyPosts: [{...state.newPost}, ...state.dataForMyPosts],
                newPost: {...state.newPost, text: ''}
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPost: {...state.newPost, text: action.text}
            }

        case SET_USER_PROFILE:
            return {
                ...state, userProfile: action.userProfile
            }

        default:
            return state
    }
}