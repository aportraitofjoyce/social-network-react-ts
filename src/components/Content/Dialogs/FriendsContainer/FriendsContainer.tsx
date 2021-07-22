import s from "../Dialogs.module.css";
import React from "react";
import {Friend} from "./Friend/Friend";
import {DataForFriendsType} from "../../../../redux/state";

type FriendsContainerPropsType = {
    dataForFriends: DataForFriendsType[]
}

export const FriendsContainer: React.FC<FriendsContainerPropsType> = (props) => {
    const dialogWithFriend = props.dataForFriends.map((item) => <Friend key={item.id} id={item.id} name={item.name}/>)

    return (
        <div className={s.friendsContainer}>
            {dialogWithFriend}
        </div>
    )
}

