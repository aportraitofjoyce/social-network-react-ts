import {ActionsType, ProfileType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export const profileReducer = (state: ProfileType, action: ActionsType): ProfileType => {
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