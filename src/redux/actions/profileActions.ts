export const ADD_POST = 'ADD_POST'
export const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'

export const addPostAC = () => ({type: ADD_POST}) as const
export const updatePostAC = (text: string) => ({type: UPDATE_POST_TEXT, text: text}) as const