import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";

export function Profile() {
    return (
        <main className={s.wrapper}>
            <MyProfile/>
            <MyPosts/>
        </main>
    )
}