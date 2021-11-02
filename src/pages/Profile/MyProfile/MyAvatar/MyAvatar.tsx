import React, {ChangeEvent, FC, memo, useCallback} from 'react'
import s from '../MyProfile.module.css'
import {Button, styled} from '@mui/material'
import {updateUserAvatar} from '../../../../redux/reducers/profile-reducer'
import {useDispatch} from 'react-redux'

type MyAvatarProps = {
    src: string
    alt: string
    isOwner: boolean
}

export const MyAvatar: FC<MyAvatarProps> = memo(({src, alt, isOwner}) => {
    const dispatch = useDispatch()

    const Input = styled('input')({
        display: 'none',
    })

    const updateUserAvatarHandler = useCallback((avatarFile: File) =>
        dispatch(updateUserAvatar(avatarFile)), [dispatch])

    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.files && updateUserAvatarHandler(e.currentTarget.files[0])
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