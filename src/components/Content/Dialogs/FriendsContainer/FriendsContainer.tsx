import s from "../Dialogs.module.css";
import React from "react";
import {Friend} from "./Friend/Friend";
import {DataForFriendsType} from "../../../../redux/state";

type FriendsContainerPropsType = {
    dataForFriends: DataForFriendsType[]
}

export function FriendsContainer(props: FriendsContainerPropsType) {
    const dialogWithFriend = props.dataForFriends.map((item: DataForFriendsType) => <Friend key={item.id} id={item.id} name={item.name}/>)

    return (
        <div className={s.friendsContainer}>
            {dialogWithFriend}
        </div>
    )
}

