import s from "../MyProfile.module.css";
import React from "react";

type MyAvatarPropsType = {
    src: string
    alt: string
}

export function MyAvatar(props: MyAvatarPropsType) {
    return (
        <div className={s.avatar_wrapper}>
            <img
                src={props.src}
                alt={props.alt}/>
        </div>
    )
}