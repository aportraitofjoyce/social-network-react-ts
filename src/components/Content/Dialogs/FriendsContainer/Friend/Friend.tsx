import {NavLink} from "react-router-dom";
import s from "../../Dialogs.module.css";
import React from "react";

type FriendPropsType = {
    id: number
    name: string
}

export function Friend(props: FriendPropsType) {
    return (
        <NavLink key={props.id} to={'/dialogs/' + props.id} className={s.friend} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
}