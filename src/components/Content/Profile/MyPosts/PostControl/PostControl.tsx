import s from "../MyPosts.module.css";
import React, {ChangeEvent} from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../../../redux/state";

type PostControlPropsType = {
    dispatch: (action: object) => void
    textForNewPost: string
}

export const PostsControl: React.FC<PostControlPropsType> = (props) => {

    const addPostHandler = () => {
        props.dispatch(addPostActionCreator())
        props.dispatch(updatePostActionCreator(''))
    }

    const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updatePostActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'} onChange={changePostHandler} value={props.textForNewPost}/>
            <button onClick={addPostHandler}>Add</button>
        </div>
    )
}