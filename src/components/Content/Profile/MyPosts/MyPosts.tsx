import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {PostsControl} from "./PostControl/PostControl";
import {dataForMyPostsType} from "../../../../types/types";

type MyPostsPropsType = {
    addPost: any
    updatePost: (text: string) => void
    textForNewPost: string
    dataForMyPosts: dataForMyPostsType[]
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const mappedPosts = props.dataForMyPosts.map((item) => {
        return <Post key={v1()}
                     text={item.text}
                     src={item.src}
                     alt={item.alt}
                     likes={item.likes}/>
    })

    return (
        <section className={s.wrapper}>
            <PostsControl textForNewPost={props.textForNewPost}
                          addPost={props.addPost}
                          updatePost={props.updatePost}/>
            {mappedPosts}
        </section>
    )
}