import React from "react";
import s from './MyProfile.module.css'

const dataForMyProfile: dataForMyProfileType = {
    src: "https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album",
    alt: "My profile",
    title: 'Илья Садовский'
}

type dataForMyProfileType = {
    src: string
    alt: string
    title: string
}

export function MyProfile() {
    return (
        <section className={s.wrapper}>
            <MyAvatar src={dataForMyProfile.src} alt={dataForMyProfile.alt}/>
            <MyInfo title={dataForMyProfile.title}/>
        </section>
    )
}


type MyAvatarType = {
    src: string
    alt: string
}

function MyAvatar(props: MyAvatarType) {
    return (
        <div className={s.avatar_wrapper}>
            <img
                src={props.src}
                alt={props.alt}/>
        </div>
    )
}


type MyInfoType = {
    title: string
}

function MyInfo(props: MyInfoType) {
    return (
        <div className={s.info_wrapper}>
            <h3>{props.title}</h3>
        </div>
    )
}

