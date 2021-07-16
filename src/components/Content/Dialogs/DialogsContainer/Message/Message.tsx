import s from "../../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    id: string
    from: string
    message: string
}

export function Message(props: MessagePropsType) {

    return (
        <div className={s.messageWrapper}>
            <div className={s.avatar}>
                <img src='https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album' alt='qq'/>
            </div>
            <div className={s.messageContainer}>
                <div><b>{props.from}:</b></div>
                <div>{props.message}</div>
            </div>
        </div>
    )
}