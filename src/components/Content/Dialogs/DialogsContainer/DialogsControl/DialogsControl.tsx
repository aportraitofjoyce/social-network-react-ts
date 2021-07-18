import s from "../../Dialogs.module.css";
import React, {ChangeEvent} from "react";
import {sendMessageActionCreator, updateMessageTextActionCreator} from "../../../../../redux/state";

type DialogsControlPropsType = {
    dispatch: (action: object) => void
    textForNewMessage: string
}

export const DialogsControl: React.FC<DialogsControlPropsType> = (props) => {

    const sendNewMessage = () => {
        props.dispatch(sendMessageActionCreator())
        props.dispatch(updateMessageTextActionCreator(''))
    }

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageTextActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.controlContainer}>
            <textarea placeholder={'Say something'} onChange={changeMessageHandler} value={props.textForNewMessage}/>
            <button onClick={sendNewMessage}>Add</button>
        </div>
    )
}