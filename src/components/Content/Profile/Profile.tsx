import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";
import {ProfileType, StoreType} from "../../../redux/redux-store";
import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";

type ProfilePropsType = {
    store: StoreType
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const state: ProfileType = props.store.getState().profile

    const addPost = () => {
        props.store.dispatch(addPostAC())
        props.store.dispatch(updatePostAC(''))
    }

    const updatePost = (text: string) => {
        props.store.dispatch(updatePostAC(text))
    }

    return (
        <main className={s.wrapper}>
            <MyProfile dataForMyProfile={state.dataForMyProfile}/>

            <MyPosts
                dataForMyPosts={state.dataForMyPosts}
                textForNewPost={state.newPost.text}
                addPost={addPost}
                updatePost={updatePost}/>
        </main>
    )
}