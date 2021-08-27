import s from '../MyProfile.module.css'
import React from 'react'

type MyAvatarPropsType = {
    src: string
    alt: string
}

export const MyAvatar: React.FC<MyAvatarPropsType> = (props) => {
    return (
        <div className={s.avatarWrapper}>
            <img
                src={props.src}
                alt={props.alt}/>
        </div>
    )
}