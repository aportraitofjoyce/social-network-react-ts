import React from "react";
import s from './MyProfile.module.css'
import {MyAvatar} from "./MyAvatar/MyAvatar";
import {MyInfo} from "./MyInfo/MyInfo";
import {dataForMyProfileType} from "../../../../redux/state";

type MyProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
}

export const MyProfile: React.FC<MyProfilePropsType> = (props) => {
    return (
        <section className={s.wrapper}>
            <MyAvatar src={props.dataForMyProfile.src} alt={props.dataForMyProfile.alt}/>
            <MyInfo title={props.dataForMyProfile.title}/>
        </section>
    )
}