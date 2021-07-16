import React from "react";
import s from './Dialogs.module.css'
import {FriendsContainer} from "./FriendsContainer/FriendsContainer";
import {DialogsContainer} from "./DialogsContainer/DialogsContainer";
import {DataForFriendsType, MessagesDataType} from "../../../redux/state";

type DialogsPropsType = {
    dataForFriends: Array<DataForFriendsType>
    dataForMessages: Array<MessagesDataType>
    sendMessage: () => void
    updateMessageText: (text: string) => void
    textForNewMessage: string

}

export function Dialogs(props: DialogsPropsType) {
    return (
        <main className={s.wrapper}>
            <FriendsContainer dataForFriends={props.dataForFriends}/>
            <DialogsContainer
                dataForMessages={props.dataForMessages}
                sendMessage={props.sendMessage}
                updateMessageText={props.updateMessageText}
                textForNewMessage={props.textForNewMessage}
            />
        </main>
    )
}