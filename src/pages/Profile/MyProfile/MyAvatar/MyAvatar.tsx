import s from '../MyProfile.module.css'
import React, {ChangeEvent} from 'react'
import {Button, styled} from '@mui/material'

type MyAvatarPropsType = {
    src: string
    alt: string
    isOwner: boolean
    updateUserAvatar: (avatarFile: File) => void
}

export const MyAvatar: React.FC<MyAvatarPropsType> = React.memo(props => {
    const {src, alt, isOwner, updateUserAvatar} = props

    const Input = styled('input')({
        display: 'none',
    })

    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.files && updateUserAvatar(e.currentTarget.files[0])
        e.currentTarget.value = ''
    }


    return (
        <div className={s.avatarContainer}>
            <img src={src} alt={alt}/>
            {isOwner && <label htmlFor='uploadProfileAvatarBtn'>
				<Input accept='image/*'
				       id='uploadProfileAvatarBtn'
				       multiple
				       type='file'
				       onChange={changeAvatarHandler}/>
				<Button variant='outlined' component='span'>Upload</Button>
			</label>}
        </div>
    )
})