import {ADD_POST, UPDATE_POST_TEXT} from '../actions/profileActions'

export const addPostAC = () => ({type: ADD_POST}) as const
export const updatePostAC = (text: string) => ({type: UPDATE_POST_TEXT, text: text}) as const