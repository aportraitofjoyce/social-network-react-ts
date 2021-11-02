import React, {memo} from 'react'
import {Avatar, Box, Divider} from '@mui/material'
import {Link} from 'react-router-dom'
import {PATH} from '../../../../../routes/routes'

type MessagePropsType = {
    userName: string
    message: string
    photo: string
    userID: number
}

export const Message: React.FC<MessagePropsType> = memo(props => {
    const {userName, message, photo, userID} = props

    return (
        <Box>
            <Link to={`${PATH.PROFILE}/${userID}`}>
                <Avatar alt={userName}
                        src={photo}
                        sx={{width: 64, height: 64}}/>
            </Link>

            <Box>
                <strong>{userName}:</strong>
            </Box>

            <Box>{message}</Box>


            <Divider/>
        </Box>
    )
})