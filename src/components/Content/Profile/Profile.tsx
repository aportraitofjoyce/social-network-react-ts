import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";

const dataForMyProfile: dataForMyProfileType = {
    src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
    alt: "My profile",
    title: 'Илья Садовский'
}

export type dataForMyProfileType = {
    src: string
    alt: string
    title: string
}

const dataForMyPosts: Array<dataForMyPostsType> = [
    {
        src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
        alt: "My profile",
        text: 'Helloooo'
    },
    {
        src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
        alt: "My profile",
        text: 'Byeeeeee'
    },
    {
        src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
        alt: "My profile",
        text: 'Animeeee'
    },
    {
        src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
        alt: "My profile",
        text: 'Looooool'
    }
]

export type dataForMyPostsType = {
    src: string
    alt: string
    text: string
}

export function Profile() {
    return (
        <main className={s.wrapper}>
            <MyProfile data={dataForMyProfile}/>
            <MyPosts data={dataForMyPosts}/>
        </main>
    )
}