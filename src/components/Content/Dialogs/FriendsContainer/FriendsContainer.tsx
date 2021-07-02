import {NavLink} from "react-router-dom";
import s from "../Dialogs.module.css";
import React from "react";
import {DataForFriendsType} from "../Dialogs";
import {Friend} from "./Friend/Friend";


type DataFriendsContainerType = {
    data: Array<DataForFriendsType>
}

export function FriendsContainer(props: DataFriendsContainerType) {
    const dialogWithFriend = props.data.map(item => <Friend data={item}/>)

    return (
        <div className={s.friendsContainer}>
            {dialogWithFriend}
        </div>
    )
}

