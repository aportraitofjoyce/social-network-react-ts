import s from '../../Dialogs.module.css'
import React from 'react'

type MessagePropsType = {
    from: string
    message: string
}

export const Message: React.FC<MessagePropsType> = React.memo(props => {
    const {from, message} = props

    return (
        <div className={s.messageWrapper}>
            <div className={s.avatar}>
                <img
                    src='https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album'
                    alt='qq'/>
            </div>
            <div className={s.messageContainer}>
                <div><strong>{from}:</strong></div>
                <div>{message}</div>
            </div>
        </div>
    )
})