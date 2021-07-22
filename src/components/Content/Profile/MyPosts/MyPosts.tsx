import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsControl} from "./PostControl/PostControl";
import {v1} from "uuid";
import {ActionsType, dataForMyPostsType} from "../../../../redux/state";

type MyPostsPropsType = {
    dataForMyPosts: dataForMyPostsType[]
    dispatch: (action: ActionsType) => void
    textForNewPost: string
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
            <PostsControl dispatch={props.dispatch} textForNewPost={props.textForNewPost}/>
            {mappedPosts}
        </section>
    )
}