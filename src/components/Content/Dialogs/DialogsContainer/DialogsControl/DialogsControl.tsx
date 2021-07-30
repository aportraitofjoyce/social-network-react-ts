import s from "../../Dialogs.module.css";
import React, {ChangeEvent} from "react";

type DialogsControlPropsType = {
    sendNewMessage: () => void
    updateMessageHandler: (text: string) => void
    textForNewMessage: string
}

export const DialogsControl: React.FC<DialogsControlPropsType> = (props) => {

    const sendNewMessage = () => {
        props.sendNewMessage()
        props.updateMessageHandler('')
    }

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateMessageHandler(e.currentTarget.value)
    }

    return (
        <div className={s.controlContainer}>
            <textarea placeholder={'Say something'}
                      onChange={changeMessageHandler}
                      value={props.textForNewMessage}/>
            <button onClick={sendNewMessage}>Add</button>
        </div>
    )
}