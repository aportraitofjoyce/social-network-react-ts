import React from "react";
import s from './Dialogs.module.css'
import {FriendsContainer} from "./FriendsContainer/FriendsContainer";
import {DialogsContainer} from "./DialogsContainer/DialogsContainer";
import {DialogsType} from "../../../redux/state";

export function Dialogs(props: DialogsType) {
    return (
        <main className={s.wrapper}>
            <FriendsContainer dataForFriends={props.dataForFriends}/>
            <DialogsContainer dataForMessages={props.dataForMessages}/>
        </main>
    )
}