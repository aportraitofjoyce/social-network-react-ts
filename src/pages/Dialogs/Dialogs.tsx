import React from 'react'
import {ChatMessageType} from '../../types/dialogs-types'

import {Messages} from './Messages/Messages'
import {DialogsForm} from './DialogsForm/DialogsForm'

type DialogsPropsType = {
    messages: ChatMessageType[]
    sendMessage: (message: string) => void
}

export const Dialogs: React.FC<DialogsPropsType> = React.memo(props => {
    const {messages, sendMessage} = props

    return (
        <main>
            <Messages messages={messages}/>
            <DialogsForm onSubmit={sendMessage}/>
        </main>
    )
})