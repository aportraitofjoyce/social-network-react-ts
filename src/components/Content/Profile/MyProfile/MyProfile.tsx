import React from "react";
import s from './MyProfile.module.css'
import {MyAvatar} from "./MyAvatar/MyAvatar";
import {MyInfo} from "./MyInfo/MyInfo";
import {dataForMyProfileType} from "../../../../redux/redux-store";

type MyProfilePropsType = {
    state: dataForMyProfileType
}

export const MyProfile: React.FC<MyProfilePropsType> = (props) => {
    return (
        <section className={s.wrapper}>
            <MyAvatar src={props.state.src} alt={props.state.alt}/>
            <MyInfo title={props.state.title}/>
        </section>
    )
}