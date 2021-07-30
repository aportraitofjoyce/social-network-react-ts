import React from "react";
import {ActionsType} from "../../../../../redux/redux-store";
import {addPostAC, updatePostAC} from "../../../../../redux/profile-reducer";
import {PostsControl} from "./PostControl";

type PostControlPropsType = {
    dispatch: (action: ActionsType) => void
    textForNewPost: string
}

export const PostControlContainer: React.FC<PostControlPropsType> = (props) => {

    const addPostHandler = () => {
        props.dispatch(addPostAC())
        props.dispatch(updatePostAC(''))
    }

    const updatePostHandler = (text: string) => {
        props.dispatch(updatePostAC(text))
    }

    return (
        <PostsControl textForNewPost={props.textForNewPost} addPost={addPostHandler} updatePost={updatePostHandler}/>
    )
}