import s from '../MyProfile.module.css'
import React from 'react'

type MyInfoPropsType = {
    title: string
    aboutMe: string
}

export const MyInfo: React.FC<MyInfoPropsType> = (props) => {
    return (
        <div className={s.infoWrapper}>
            <h2>{props.title}</h2>
            <h4>{props.aboutMe}</h4>
        </div>
    )
}