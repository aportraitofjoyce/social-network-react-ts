import s from '../../Dialogs.module.css'
import React, {ChangeEvent} from 'react'

type DialogsControlPropsType = {
    sendMessage: () => void
    updateMessage: (text: string) => void
    textForNewMessage: string
}

export const DialogsControl: React.FC<DialogsControlPropsType> = (props) => {
    const sendMessageHandler = () => props.sendMessage()
    const updateMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => props.updateMessage(e.currentTarget.value)

    return (
        <div className={s.controlContainer}>
            <textarea placeholder={'Say something'}
                      onChange={updateMessageHandler}
                      value={props.textForNewMessage}/>
            <button onClick={sendMessageHandler}>Add</button>
        </div>
    )
}