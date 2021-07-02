import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {dataForMyProfile} from "../MyProfile/MyProfile";

const dataForMyPosts: Array<dataForMyPostsType> = [
    {
        src: dataForMyProfile.src,
        alt: dataForMyProfile.alt,
        text: 'Helloooo'
    },
    {
        src: dataForMyProfile.src,
        alt: dataForMyProfile.alt,
        text: 'Byeeeeee'
    },
    {
        src: dataForMyProfile.src,
        alt: dataForMyProfile.alt,
        text: 'Animeeee'
    },
    {
        src: dataForMyProfile.src,
        alt: dataForMyProfile.alt,
        text: 'Looooool'
    }
]

type dataForMyPostsType = {
    src: string
    alt: string
    text: string
}

export function MyPosts() {

    const mappedPosts = dataForMyPosts.map(item => {
        return <Post text={item.text} src={item.src} alt={item.alt}/>
    })

    return (
        <section className={s.wrapper}>
            <PostsControl/>
            {mappedPosts}
        </section>
    )
}

function PostsControl() {
    return (
        <div className={s.control_wrapper}>
            <textarea placeholder={'Say something'}/>
            <button>Add</button>
        </div>
    )
}