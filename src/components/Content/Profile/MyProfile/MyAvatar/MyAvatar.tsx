import s from '../MyProfile.module.css'
import React, {ChangeEvent} from 'react'

type MyAvatarPropsType = {
    src: string
    alt: string
    isOwner: boolean
    updateUserAvatar: (avatarFile: File) => void
}

export const MyAvatar: React.FC<MyAvatarPropsType> = React.memo(props => {
    const {src, alt, isOwner, updateUserAvatar} = props

    const changeAvatarHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.files && updateUserAvatar(e.currentTarget.files[0])
        e.currentTarget.value = ''
    }

    return (
        <div className={s.avatarContainer}>
            <img src={src} alt={alt}/>
            {isOwner && <input type='file' onChange={changeAvatarHandler}/>}
        </div>
    )
})