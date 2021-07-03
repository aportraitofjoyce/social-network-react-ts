import React from "react";
import s from './MyProfile.module.css'
import {MyAvatar} from "./MyAvatar/MyAvatar";
import {MyInfo} from "./MyInfo/MyInfo";

type MyProfilePropsType = {
    dataForMyProfile: {
        src: string
        alt: string
        title: string
    }
}

export function MyProfile(props: MyProfilePropsType) {
    return (
        <section className={s.wrapper}>
            <MyAvatar src={props.dataForMyProfile.src} alt={props.dataForMyProfile.alt}/>
            <MyInfo title={props.dataForMyProfile.title}/>
        </section>
    )
}