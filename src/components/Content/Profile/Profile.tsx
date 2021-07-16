import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";
import {dataForMyPostsType, dataForMyProfileType} from "../../../redux/state";

type ProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
    dataForMyPosts: Array<dataForMyPostsType>
    addPost: () => void
    updatePostText: (postText: string) => void
    textForNewPost: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <main className={s.wrapper}>
            <MyProfile dataForMyProfile={props.dataForMyProfile}/>
            <MyPosts
                dataForMyPosts={props.dataForMyPosts}
                addPost={props.addPost}
                updatePostText={props.updatePostText}
                textForNewPost={props.textForNewPost}
            />
        </main>
    )
}