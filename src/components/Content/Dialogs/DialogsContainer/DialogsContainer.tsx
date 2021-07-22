import React from "react";
import s from "../Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsControl} from "./DialogsControl/DialogsControl";
import {v1} from "uuid";
import {ActionsType} from "../../../../redux/state";

type DialogsContainerPropsType = {
    dataForMessages: DialogsContainerDataForMessagesPropsType[]
    dispatch: (action: ActionsType) => void
    textForNewMessage: string
}

type DialogsContainerDataForMessagesPropsType = {
    id: string
    from: string
    message: string
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {

    const mappedMessages = props.dataForMessages.map((item: DialogsContainerDataForMessagesPropsType) => <Message
        key={v1()} from={item.from} message={item.message} id={item.id}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsContainer}>
                {mappedMessages}
            </div>
            <DialogsControl
                dispatch={props.dispatch}
                textForNewMessage={props.textForNewMessage}
            />
        </div>
    )
}