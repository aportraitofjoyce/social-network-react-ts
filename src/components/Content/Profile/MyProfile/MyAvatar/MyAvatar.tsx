import s from '../MyProfile.module.css'
import React from 'react'

type MyAvatarPropsType = {
    src: string
    alt: string
}

export const MyAvatar: React.FC<MyAvatarPropsType> = React.memo(props => {
    const {src, alt} = props

    return (
        <div className={s.avatarWrapper}>
            <img
                src={src}
                alt={alt}/>
        </div>
    )
})