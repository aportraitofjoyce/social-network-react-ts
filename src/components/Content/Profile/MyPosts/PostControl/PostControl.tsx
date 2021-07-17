import s from "../MyPosts.module.css";
import React, {ChangeEvent} from "react";

type PostControlPropsType = {
    dispatch: (action: object) => void
    textForNewPost: string
}

export const PostsControl: React.FC<PostControlPropsType> = (props) => {

    const addPostHandler = () => {
        props.dispatch({type: 'ADD-POST'})
        props.dispatch({type: 'UPDATE-POST-TEXT', postText: ''})
    }

    const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-POST-TEXT', postText: e.currentTarget.value})
    }

    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'} onChange={changePostHandler} value={props.textForNewPost}/>
            <button onClick={addPostHandler}>Add</button>
        </div>
    )
}