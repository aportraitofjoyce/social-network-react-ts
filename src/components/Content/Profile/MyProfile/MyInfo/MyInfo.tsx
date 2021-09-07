import s from '../MyProfile.module.css'
import React from 'react'
import {MyStatus} from './MyStatus/MyStatus'

type MyInfoPropsType = {
    title: string
    aboutMe: string
}

export const MyInfo: React.FC<MyInfoPropsType> = (props) => {
    return (
        <div className={s.infoWrapper}>
            <h2 style={{marginBottom: 24}}>{props.title}</h2>
            <MyStatus status={props.aboutMe !== null? props.aboutMe : 'Статусик'}/>
        </div>
    )
}