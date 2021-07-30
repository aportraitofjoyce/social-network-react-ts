import s from "../MyPosts.module.css";
import React, {ChangeEvent} from "react";

type PostControlPropsType = {
    textForNewPost: string
    addPost: () => void
    updatePost: (text: string) => void
}

export const PostsControl: React.FC<PostControlPropsType> = (props) => {
    const addPostHandler = () => {
        props.addPost()
        props.updatePost('')
    }

    const updatePostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updatePost(e.currentTarget.value)
    }

    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'}
                      onChange={updatePostHandler}
                      value={props.textForNewPost}/>
            <button onClick={addPostHandler}>Add</button>
        </div>
    )
}