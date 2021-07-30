import s from "../../Dialogs.module.css";
import React, {ChangeEvent} from "react";
import {ActionsType} from "../../../../../redux/state";
import {sendMessageAC, updateMessageTextAC} from "../../../../../redux/dialogs-reducer";

type DialogsControlPropsType = {
    dispatch: (action: ActionsType) => void
    textForNewMessage: string
}

export const DialogsControl: React.FC<DialogsControlPropsType> = (props) => {

    const sendNewMessage = () => {
        props.dispatch(sendMessageAC())
        props.dispatch(updateMessageTextAC(''))
    }

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateMessageTextAC(e.currentTarget.value))
    }

    return (
        <div className={s.controlContainer}>
            <textarea placeholder={'Say something'} onChange={changeMessageHandler} value={props.textForNewMessage}/>
            <button onClick={sendNewMessage}>Add</button>
        </div>
    )
}