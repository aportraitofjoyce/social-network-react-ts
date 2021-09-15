import s from '../MyProfile.module.css'
import React from 'react'
import {MyStatus} from './MyStatus/MyStatus'

type MyInfoPropsType = {
    title: string
    userStatus: string
    updateUserStatus: (status: string) => void
}

export const MyInfo: React.FC<MyInfoPropsType> = React.memo(props => {
    const {title, userStatus, updateUserStatus} = props

    return (
        <div className={s.infoWrapper}>
            <h2 style={{marginBottom: 24}}>{title}</h2>
            <MyStatus status={userStatus}
                      updateUserStatus={updateUserStatus}/>
        </div>
    )
})