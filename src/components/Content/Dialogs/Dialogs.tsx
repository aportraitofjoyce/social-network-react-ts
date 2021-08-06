import React from "react";
import s from './Dialogs.module.css'
import {DataForFriendsType, DialogsType, MessagesDataType, StoreType} from "../../../redux/store";
import {sendMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer";
import {FriendsToChat} from "./FriendsToChat/FriendsToChat";
import {DialogsChat} from "./DialogsChat/DialogsChat";

type DialogsPropsType = {
    dataForMessages: MessagesDataType[]
    sendNewMessage: () => void
    updateMessage: (text: string) => void
    textForNewMessage: string
    dataForFriends: DataForFriendsType[]
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
 /*   const state: DialogsType = props.store.getState().dialogs

    const sendNewMessage = () => {
        props.store.dispatch(sendMessageAC())
        props.store.dispatch(updateMessageTextAC(''))
    }

    const updateMessageHandler = (text: string) => {
        props.store.dispatch(updateMessageTextAC(text))
    }*/

    return (
        <main className={s.wrapper}>
            <FriendsToChat dataForFriends={props.dataForFriends}/>
            <DialogsChat
                dataForMessages={props.dataForMessages}
                textForNewMessage={props.textForNewMessage}
                sendNewMessage={props.sendNewMessage}
                updateMessage={props.updateMessage}
            />
        </main>
    )
}