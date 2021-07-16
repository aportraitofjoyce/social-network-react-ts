import {NavLink} from "react-router-dom";
import s from "../../Dialogs.module.css";
import React from "react";
import {DataForFriendsType} from "../../../../../redux/state";

export function Friend(props: DataForFriendsType) {
    return (
        <NavLink to={'/dialogs/' + props.id} className={s.friend} activeClassName={s.active}>
            {props.name}
        </NavLink>
    )
}