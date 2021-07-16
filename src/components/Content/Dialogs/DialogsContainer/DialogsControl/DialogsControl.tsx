import s from "../../Dialogs.module.css";
import React, {ChangeEvent} from "react";

type DialogsControlPropsType = {
    sendMessage: () => void
    updateMessageText: (text: string) => void
    textForNewMessage: string
}

export function DialogsControl(props: DialogsControlPropsType) {
    
    const sendNewMessage = () => {
        props.sendMessage()
        props.updateMessageText('')
    }

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageText(e.currentTarget.value)
    }

    return (
        <div className={s.controlContainer}>
            <textarea placeholder={'Say something'} onChange={changeMessageHandler} value={props.textForNewMessage}/>
            <button onClick={sendNewMessage}>Add</button>
        </div>
    )
}