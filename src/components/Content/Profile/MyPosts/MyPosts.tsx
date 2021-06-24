import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

const dataForMyPosts: dataForMyPostsType = {
    src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
    alt: 'Post name',
}

const textForMyPosts: textForMyPostsType = {
    text1: 'Helloooo',
    text2: 'Byeeeeee',
    text3: 'Animeeee',
    text4: 'Looooool',
    text5: 'Zzzzzzzz'
}

type dataForMyPostsType = {
    src: string
    alt: string
}

type textForMyPostsType = {
    text1: string,
    text2: string,
    text3: string,
    text4: string,
    text5: string
}

export function MyPosts() {
    return (
        <section className={s.wrapper}>
            <PostsControl/>
            <Post text={textForMyPosts.text1} src={dataForMyPosts.src} alt={dataForMyPosts.alt}/>
            <Post text={textForMyPosts.text2} src={dataForMyPosts.src} alt={dataForMyPosts.alt}/>
            <Post text={textForMyPosts.text3} src={dataForMyPosts.src} alt={dataForMyPosts.alt}/>
            <Post text={textForMyPosts.text4} src={dataForMyPosts.src} alt={dataForMyPosts.alt}/>
            <Post text={textForMyPosts.text5} src={dataForMyPosts.src} alt={dataForMyPosts.alt}/>
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