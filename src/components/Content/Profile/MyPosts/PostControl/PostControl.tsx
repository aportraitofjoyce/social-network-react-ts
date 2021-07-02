import s from "../MyPosts.module.css";
import React from "react";

export function PostsControl() {
    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'}/>
            <button>Add</button>
        </div>
    )
}