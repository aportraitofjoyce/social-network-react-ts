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

export const DialogsChat: React.FC<DialogsContainerPropsType> = React.memo(props => {
    const {dataForMessages, sendMessage} = props

    const mappedMessages = dataForMessages.map(message => <Message key={v1()}
                                                                   from={message.from}
                                                                   message={message.message}/>)

    return (
        <div className={s.dialogsWrapper}>
            <div className={s.dialogsContainer}>
                {mappedMessages}
            </div>
            <DialogsForm onSubmit={sendMessage}/>
        </div>
    )
})