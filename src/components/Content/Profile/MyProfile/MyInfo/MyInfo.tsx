import s from "../MyProfile.module.css";
import React from "react";

type MyInfoPropsType = {
    title: string
}

export function MyInfo(props: MyInfoPropsType) {
    return (
        <div className={s.info_wrapper}>
            <h3>{props.title}</h3>
        </div>
    )
}