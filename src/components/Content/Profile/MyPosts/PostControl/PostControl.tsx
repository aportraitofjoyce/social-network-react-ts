import s from "../MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {ActionsType, addPostAC, updatePostAC} from "../../../../../redux/state";

type PostControlPropsType = {
    dispatch: (action: ActionsType) => void
    textForNewPost: string
}

export const PostsControl: React.FC<PostControlPropsType> = (props) => {

    const addPostHandler = () => {
        props.dispatch(addPostAC())
        props.dispatch(updatePostAC(''))
    }

    const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostAC(e.currentTarget.value))
    }

    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'} onChange={changePostHandler} value={props.textForNewPost}/>
            <button onClick={addPostHandler}>Add</button>
        </div>
    )
}