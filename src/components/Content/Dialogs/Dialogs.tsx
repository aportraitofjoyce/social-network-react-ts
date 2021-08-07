import React from "react";
import s from './Dialogs.module.css'
import {DataForFriendsType, MessagesDataType} from "../../../redux/store";
import {FriendsToChat} from "./FriendsToChat/FriendsToChat";
import {DialogsChat} from "./DialogsChat/DialogsChat";

type DialogsPropsType = {
    dataForMessages: MessagesDataType[]
    sendMessage: () => void
    updateMessage: (text: string) => void
    textForNewMessage: string
    dataForFriends: DataForFriendsType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <main className={s.wrapper}>
            <FriendsToChat dataForFriends={props.dataForFriends}/>
            <DialogsChat
                dataForMessages={props.dataForMessages}
                textForNewMessage={props.textForNewMessage}
                sendMessage={props.sendMessage}
                updateMessage={props.updateMessage}
            />
        </main>
    )
}