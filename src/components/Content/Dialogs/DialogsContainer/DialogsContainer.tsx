import React from "react";
import s from "../Dialogs.module.css";
import {Message} from "./Message/Message";
import {DialogsControl} from "./DialogsControl/DialogsControl";

type DialogsContainerPropsType = {
    dataForMessages: Array<DialogsContainerDataForMessagesPropsType>
    sendMessage: () => void
    updateMessageText: (text: string) => void
    textForNewMessage: string
}

type DialogsContainerDataForMessagesPropsType = {
    id: string
    from: string
    message: string
}

export function DialogsContainer(props: DialogsContainerPropsType) {

    const mappedMessages = props.dataForMessages.map((item: DialogsContainerDataForMessagesPropsType) => <Message
        from={item.from} message={item.message} id={item.id}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsContainer}>
                {mappedMessages}
            </div>
            <DialogsControl
                sendMessage={props.sendMessage}
                updateMessageText={props.updateMessageText}
                textForNewMessage={props.textForNewMessage}
            />
        </div>
    )
}