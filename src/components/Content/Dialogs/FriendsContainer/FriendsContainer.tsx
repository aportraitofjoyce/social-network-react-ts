import s from "../Dialogs.module.css";
import React from "react";
import {Friend} from "./Friend/Friend";

type FriendsContainerPropsType = {
    dataForFriends: Array<FriendsContainerDataForFriendsPropsType>
}

type FriendsContainerDataForFriendsPropsType = {
    id: number
    name: string
}

export function FriendsContainer(props: FriendsContainerPropsType) {
    const dialogWithFriend = props.dataForFriends.map((item: FriendsContainerDataForFriendsPropsType) => <Friend id={item.id} name={item.name}/>)

    return (
        <div className={s.friendsContainer}>
            {dialogWithFriend}
        </div>
    )
}

