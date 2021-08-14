import React from 'react'
import s from '../Dialogs.module.css'
import {Message} from './Message/Message'
import {DialogsControl} from './DialogsControl/DialogsControl'
import {v1} from 'uuid'
import {MessagesDataType} from '../../../../types/types'

type DialogsContainerPropsType = {
    dataForMessages: MessagesDataType[]
    sendMessage: () => void
    updateMessage: (text: string) => void
    textForNewMessage: string
}

export const DialogsChat: React.FC<DialogsContainerPropsType> = (props) => {
    const mappedMessages = props.dataForMessages.map(item => <Message
        key={v1()} from={item.from} message={item.message} id={item.id}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsContainer}>
                {mappedMessages}
            </div>
            <DialogsControl
                textForNewMessage={props.textForNewMessage}
                sendMessage={props.sendMessage}
                updateMessage={props.updateMessage}
            />
        </div>
    )
}