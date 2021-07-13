import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";
import {dataForMyPostsType, dataForMyProfileType, ProfileType} from "../../../redux/state";

type ProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
    dataForMyPosts: Array<dataForMyPostsType>
    addPost: (postText: string) => void
}

export function Profile(props: ProfilePropsType) {
    return (
        <main className={s.wrapper}>
            <MyProfile dataForMyProfile={props.dataForMyProfile}/>
            <MyPosts dataForMyPosts={props.dataForMyPosts} addPost={props.addPost}/>
        </main>
    )
}