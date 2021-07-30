import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {v1} from "uuid";
import {ActionsType, ProfileType} from "../../../../redux/redux-store";
import {PostControlContainer} from "./PostControl/PostControlContainer";

type MyPostsPropsType = {
    dispatch: (action: ActionsType) => void
    state: ProfileType
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {
    const mappedPosts = props.state.dataForMyPosts.map((item) => {
        return <Post key={v1()}
                     text={item.text}
                     src={item.src}
                     alt={item.alt}
                     likes={item.likes}/>
    })

    return (
        <section className={s.wrapper}>
            <PostControlContainer dispatch={props.dispatch} textForNewPost={props.state.newPost.text}/>
            {mappedPosts}
        </section>
    )
}