import React from 'react'

import {Messages} from './Messages/Messages'
import {DialogsForm} from './DialogsForm/DialogsForm'
import {ChatMessageType} from '../../redux/reducers/dialogs-reducer'

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