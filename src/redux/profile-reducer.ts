import {ActionsType, ProfileType} from "./redux-store";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const initialState =  {
    dataForMyProfile: {
        src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
        alt: "My profile",
        title: 'Илья Садовский'
    },
    dataForMyPosts: [
        {
            src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
            alt: "My profile",
            text: 'My first post',
            likes: 10
        },
        {
            src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
            alt: "My profile",
            text: 'My second post',
            likes: 5
        },
        {
            src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
            alt: "My profile",
            text: 'My third post',
            likes: 43
        },
        {
            src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
            alt: "My profile",
            text: 'My fourth post',
            likes: 0
        }
    ],
    newPost: {
        src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
        alt: "My profile",
        text: 'Что-то чтобы не вводить для тестов',
        likes: 0
    }
}

export const profileReducer = (state: ProfileType = initialState, action: ActionsType): ProfileType => {
    const _addPost = () => state.dataForMyPosts = [{...state.newPost}, ...state.dataForMyPosts]
    const _updatePostText = (text: string) => state.newPost.text = text

    switch (action.type) {
        case ADD_POST:
            _addPost()
            return state
        case UPDATE_POST_TEXT:
            _updatePostText(action.text)
            return state
        default:
            return state
    }
}

export const addPostAC = () => ({type: ADD_POST}) as const
export const updatePostAC = (text: string) => ({type: UPDATE_POST_TEXT, text: text}) as const