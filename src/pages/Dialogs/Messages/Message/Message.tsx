import React, {memo} from 'react'
import {Avatar, Box, Divider} from '@mui/material'
import {Link} from 'react-router-dom'
import {PATH} from '../../../../routes/routes'
import {ChatMessageType} from '../../../../redux/reducers/dialogs-reducer'

type MessageProps = {
    message: ChatMessageType
}

export const Message: React.FC<MessageProps> = memo(({message}) => {
    return (
        <Box>
            <Link to={`${PATH.PROFILE}/${message.userId}`}>
                <Avatar alt={message.userName}
                        src={message.photo}
                        sx={{width: 64, height: 64}}/>
            </Link>

            <Box>
                <strong>{message.userName}:</strong>
            </Box>

            <Box>{message.message}</Box>
            <Divider/>
        </Box>
    )
})