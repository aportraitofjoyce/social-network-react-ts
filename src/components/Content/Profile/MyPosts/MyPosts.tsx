import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsControl} from "./PostControl/PostControl";
import {v1} from "uuid";

type MyPostsPropsType = {
    dataForMyPosts: MyPostsDataForMyPostsPropsType[]
    dispatch: (action: any) => void
    textForNewPost: string
}
type MyPostsDataForMyPostsPropsType = {
    text: string
    src: string
    alt: string
    likes: number
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const mappedPosts = props.dataForMyPosts.map((item: MyPostsDataForMyPostsPropsType) => {
        return <Post key={v1()} text={item.text} src={item.src} alt={item.alt} likes={item.likes}/>
    })

    return (
        <section className={s.wrapper}>
            <PostsControl dispatch={props.dispatch} textForNewPost={props.textForNewPost}/>
            {mappedPosts}
        </section>
    )
}