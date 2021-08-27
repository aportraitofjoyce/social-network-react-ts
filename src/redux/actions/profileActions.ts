export const ADD_POST = 'ADD_POST'
export const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

export const addPost = () => ({type: ADD_POST}) as const
export const updatePost = (text: string) => ({type: UPDATE_POST_TEXT, text: text}) as const