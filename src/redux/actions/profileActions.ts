export const ADD_POST = 'ADD_POST'
export const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT'
export const SET_USER_PROFILE = 'SET_USER_PROFILE'

export const addPost = () => ({type: ADD_POST}) as const
export const updatePost = (text: string) => ({type: UPDATE_POST_TEXT, text}) as const
export const setUserProfile = (userProfile: any) => ({type: SET_USER_PROFILE, userProfile}) as const