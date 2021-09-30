import React from 'react'
import {Avatar, Box} from '@mui/material'

type PostPropsType = {
    src: string
    alt: string
    text: string
    likes: number
}

export const Post: React.FC<PostPropsType> = React.memo(props => {
    const {src, alt, text, likes} = props

    return (
        <Box>
            <Avatar alt={alt} src={src} sx={{width: 64, height: 64}}/>

            <div>{text}</div>
            <div>Likes: {likes}</div>
        </Box>
    )
})