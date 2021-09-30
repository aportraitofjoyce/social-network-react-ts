import React from 'react'
import {Message} from './Message/Message'
import {v1} from 'uuid'
import {ChatMessageType} from '../../../../types/dialogs-types'
import {Box} from '@mui/material'

type MessagesPropsType = {
    messages: ChatMessageType[]
}

export const Messages: React.FC<MessagesPropsType> = React.memo(props => {
    const {messages} = props

    const mappedMessages = messages.map(message => <Message key={v1()}
                                                            userName={message.userName}
                                                            message={message.message}
                                                            photo={message.photo}
                                                            userID={message.userId}/>)

    return (
        <Box sx={{maxHeight: 512, overflowY: 'auto'}}>
            {mappedMessages}
        </Box>
    )
})