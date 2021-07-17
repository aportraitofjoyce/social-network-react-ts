import s from "../../Dialogs.module.css";
import React, {ChangeEvent} from "react";

type DialogsControlPropsType = {
    dispatch: (action: object) => void
    textForNewMessage: string
}

export const DialogsControl: React.FC<DialogsControlPropsType> = (props) => {

    const sendNewMessage = () => {
        props.dispatch({type: 'SEND-MESSAGE'})
        props.dispatch({type: 'UPDATE-MESSAGE-TEXT', text: ''})
    }

    const changeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-MESSAGE-TEXT', text: e.currentTarget.value})
    }

    return (
        <div className={s.controlContainer}>
            <textarea placeholder={'Say something'} onChange={changeMessageHandler} value={props.textForNewMessage}/>
            <button onClick={sendNewMessage}>Add</button>
        </div>
    )
}