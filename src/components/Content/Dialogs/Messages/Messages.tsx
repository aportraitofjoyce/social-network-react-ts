import React, {useEffect, useRef} from 'react'
import {Message} from './Message/Message'
import {ChatMessageType} from '../../../../types/dialogs-types'
import {Box} from '@mui/material'

type MessagesPropsType = {
    messages: ChatMessageType[]
}

export const Messages: React.FC<MessagesPropsType> = React.memo(props => {
    const {messages} = props

    const bottomOfMessages = useRef<HTMLDivElement>(null)

    const mappedMessages = messages.map((message, index) => <Message key={index}
                                                                     userName={message.userName}
                                                                     message={message.message}
                                                                     photo={message.photo}
                                                                     userID={message.userId}/>)

    useEffect(() => {
        bottomOfMessages.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages])

    return (
        <Box sx={{maxHeight: 512, overflowY: 'auto'}}>
            {mappedMessages}
            <div ref={bottomOfMessages}/>
        </Box>
    )
})