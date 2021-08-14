import s from '../MyProfile.module.css'
import React from 'react'

type MyInfoPropsType = {
    title: string
}

export const MyInfo: React.FC<MyInfoPropsType> = (props) => {
    return (
        <div className={s.info_wrapper}>
            <h3>{props.title}</h3>
        </div>
    )
}