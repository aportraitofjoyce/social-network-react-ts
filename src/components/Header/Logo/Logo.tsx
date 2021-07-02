import s from "../Header.module.css";
import React from "react";

type LogoPropsType = {
    href: string
}

export function Logo(props: LogoPropsType) {
    return (<div className={s.logo_wrapper}>
            <a href={props.href}>
                <b>Social Network</b>
            </a>
        </div>
    )
}