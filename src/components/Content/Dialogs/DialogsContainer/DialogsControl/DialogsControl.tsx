import s from "../../Dialogs.module.css";
import React, {createRef} from "react";

export function DialogsControl() {
    const newMessage = createRef<HTMLTextAreaElement>()
    
    const sendNewMessage = () => {
        const text = newMessage.current?.value
        alert(text)
    }

    return (
        <div className={s.controlContainer}>
            <textarea placeholder={'Say something'} ref={newMessage}/>
            <button onClick={sendNewMessage}>Add</button>
        </div>
    )
}