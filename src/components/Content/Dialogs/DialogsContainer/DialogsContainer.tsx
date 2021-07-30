import React from "react";
import s from "../Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsControl} from "./DialogsControl/DialogsControl";
import {v1} from "uuid";
import {MessagesDataType} from "../../../../redux/redux-store";

type DialogsContainerPropsType = {
    dataForMessages: MessagesDataType[]
    sendNewMessage: () => void
    updateMessageHandler: (text: string) => void
    textForNewMessage: string
}

export const DialogsContainer: React.FC<DialogsContainerPropsType> = (props) => {
    const mappedMessages = props.dataForMessages.map(item => <Message
        key={v1()} from={item.from} message={item.message} id={item.id}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsContainer}>
                {mappedMessages}
            </div>
            <DialogsControl
                textForNewMessage={props.textForNewMessage}
                sendNewMessage={props.sendNewMessage}
                updateMessageHandler={props.updateMessageHandler}
            />
        </div>
    )
}