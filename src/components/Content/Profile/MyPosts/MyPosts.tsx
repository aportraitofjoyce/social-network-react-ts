import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsControl} from "./PostControl/PostControl";

type MyPostsPropsType = {
    dataForMyPosts: Array<MyPostsDataForMyPostsPropsType>
    addPost: () => void
    updatePostText: (postText: string) => void
    textForNewPost: string
}
type MyPostsDataForMyPostsPropsType = {
    text: string
    src: string
    alt: string
}

export function MyPosts(props: MyPostsPropsType) {
    const mappedPosts = props.dataForMyPosts.map((item: MyPostsDataForMyPostsPropsType) => {
        return <Post text={item.text} src={item.src} alt={item.alt}/>
    })

    return (
        <section className={s.wrapper}>
            <PostsControl addPost={props.addPost} updatePostText={props.updatePostText} textForNewPost={props.textForNewPost}/>
            {mappedPosts}
        </section>
    )
}