import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div className={s.wrapper}>
            <textarea></textarea>
            <button>Add</button>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}