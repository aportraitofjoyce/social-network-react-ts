import React, {FC, memo, useEffect, useRef} from 'react'
import {Message} from './Message/Message'
import {Box} from '@mui/material'
import {useAppSelector} from '../../../hooks/hooks'

export const Messages: FC = memo(() => {
    const {messages} = useAppSelector(state => state.dialogs)
    const bottomOfMessages = useRef<HTMLDivElement>(null)

    useEffect(() => {
        bottomOfMessages.current?.scrollIntoView({behavior: 'smooth'})
    }, [messages])

    return (
        <Box sx={{maxHeight: 512, overflowY: 'auto'}}>
            {messages.map((message) => <Message key={message.messageID} message={message}/>)}
            <div ref={bottomOfMessages}/>
        </Box>
    )
})