import React from "react";
import s from "../Dialogs.module.css";
import {Message} from "./Message/Message";
import {MessagesDataType} from "../Dialogs";

type DialogsContainerPropsType = {
    data: Array<MessagesDataType>
}

export function DialogsContainer(props: DialogsContainerPropsType) {
    const mappedMessages = props.data.map((item: MessagesDataType) => <Message data={item}/>)

    return (
        <div className={s.dialogsContainer}>
            {mappedMessages}
        </div>
    )
}