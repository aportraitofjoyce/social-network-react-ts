import React from "react";
import s from './Dialogs.module.css'
import {FriendsContainer} from "./FriendsContainer/FriendsContainer";
import {DialogsContainer} from "./DialogsContainer/DialogsContainer";
import {DialogsType} from "../../../redux/redux-store";
import {sendMessageAC, updateMessageTextAC} from "../../../redux/dialogs-reducer";

type DialogsPropsType = {
    store: any
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    const state: DialogsType = props.store.getState().dialogs

    const sendNewMessage = () => {
        props.store.dispatch(sendMessageAC())
        props.store.dispatch(updateMessageTextAC(''))
    }

    const updateMessageHandler = (text: string) => {
        props.store.dispatch(updateMessageTextAC(text))
    }

    return (
        <main className={s.wrapper}>
            <FriendsContainer dataForFriends={state.dataForFriends}/>
            <DialogsContainer
                dataForMessages={state.dataForMessages}
                textForNewMessage={state.newMessage.message}
                sendNewMessage={sendNewMessage}
                updateMessageHandler={updateMessageHandler}
            />
        </main>
    )
}