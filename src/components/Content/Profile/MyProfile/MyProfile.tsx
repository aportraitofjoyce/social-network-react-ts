import React from "react";
import s from './MyProfile.module.css'
import {MyAvatar} from "./MyAvatar/MyAvatar";
import {MyInfo} from "./MyInfo/MyInfo";
import {dataForMyProfileType} from "../Profile";

type MyProfilePropsType = {
    data: dataForMyProfileType
}

export function MyProfile(props: MyProfilePropsType) {
    return (
        <section className={s.wrapper}>
            <MyAvatar src={props.data.src} alt={props.data.alt}/>
            <MyInfo title={props.data.title}/>
        </section>
    )
}