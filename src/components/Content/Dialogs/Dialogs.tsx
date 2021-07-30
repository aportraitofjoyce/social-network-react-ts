import React from "react";
import s from './Dialogs.module.css'
import {FriendsContainer} from "./FriendsContainer/FriendsContainer";
import {DialogsContainer} from "./DialogsContainer/DialogsContainer";
import {ActionsType, DataForFriendsType, MessagesDataType} from "../../../redux/redux-store";

type DialogsPropsType = {
    dataForFriends: DataForFriendsType[]
    dataForMessages: MessagesDataType[]
    dispatch: (action: ActionsType) => void
    textForNewMessage: string
    store: any
}

export const Dialogs: React.FC<DialogsPropsType> = (props) => {
    return (
        <main className={s.wrapper}>
            <FriendsContainer dataForFriends={props.dataForFriends}/>
            <DialogsContainer
                dataForMessages={props.dataForMessages}
                dispatch={props.dispatch}
                textForNewMessage={props.textForNewMessage}
            />
        </main>
    )
}