import React from 'react'
import s from '../Dialogs.module.css'
import {Message} from './Message/Message'
import {DialogsForm} from './DialogsForm/DialogsForm'
import {v1} from 'uuid'
import {MessagesDataType} from '../../../../types/dialogs-types'

type DialogsContainerPropsType = {
    dataForMessages: MessagesDataType[]
    sendMessage: (text: string) => void
}

export const DialogsChat: React.FC<DialogsContainerPropsType> = (props) => {
    const mappedMessages = props.dataForMessages.map(item => <Message key={v1()}
                                                                      from={item.from}
                                                                      message={item.message}
                                                                      id={item.id}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsContainer}>
                {mappedMessages}
            </div>
            <DialogsForm
                onSubmit={props.sendMessage}/>
        </div>
    )
}