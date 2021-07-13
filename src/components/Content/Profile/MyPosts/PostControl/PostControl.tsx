import s from "../MyPosts.module.css";
import React, {createRef} from "react";

type PostControlPropsType = {
    addPost: (text: any) => void
}

export function PostsControl(props: PostControlPropsType) {
    const newPostElement  = createRef<HTMLTextAreaElement>()

    const addPost = () => {
        let text: string | undefined = newPostElement.current?.value
        props.addPost(text)
    }

    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'} ref={newPostElement}/>
            <button onClick={addPost}>Add</button>
        </div>
    )
}