import {DataForFriendsType} from "../../Dialogs";
import {NavLink} from "react-router-dom";
import s from "../../Dialogs.module.css";
import React from "react";

type FriendPropsTypes = {
    data: DataForFriendsType
}

export function Friend(props: FriendPropsTypes) {
    return (
        <NavLink key={props.data.id} to={'/dialogs/' + props.data.id} className={s.friend} activeClassName={s.active}>
            {props.data.name}
        </NavLink>
    )
}