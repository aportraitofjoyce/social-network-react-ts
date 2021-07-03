import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";
import {ProfileType} from "../../../redux/state";

export function Profile(props: ProfileType) {
    return (
        <main className={s.wrapper}>
            <MyProfile dataForMyProfile={props.dataForMyProfile}/>
            <MyPosts dataForMyPosts={props.dataForMyPosts}/>
        </main>
    )
}