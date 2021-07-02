import s from "../Header.module.css";
import React from "react";

type MiniProfileType = {
    src: string
    alt: string
}

export function MiniProfile(props: MiniProfileType) {
    return (
        <div className={s.mini_profile}>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}