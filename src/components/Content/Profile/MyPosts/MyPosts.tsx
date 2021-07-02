import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsControl} from "./PostControl/PostControl";
import {dataForMyPostsType} from "../Profile";

type MyPostsPropsType = {
    data: Array<dataForMyPostsType>
}

export function MyPosts(props: MyPostsPropsType) {
    const mappedPosts = props.data.map((item: dataForMyPostsType) => {
        return <Post text={item.text} src={item.src} alt={item.alt}/>
    })

    return (
        <section className={s.wrapper}>
            <PostsControl/>
            {mappedPosts}
        </section>
    )
}