import s from "../MyPosts.module.css";
import React, {ChangeEvent} from "react";

type PostControlPropsType = {
    addPost: () => void
    updatePostText: (postText: string) => void
    textForNewPost: string
}

export function PostsControl(props: PostControlPropsType) {

    const addPostHandler = () => {
        props.addPost()
        props.updatePostText('')
    }

    const changePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePostText(e.currentTarget.value)
    }

    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'} onChange={changePostHandler} value={props.textForNewPost}/>
            <button onClick={addPostHandler}>Add</button>
        </div>
    )
}