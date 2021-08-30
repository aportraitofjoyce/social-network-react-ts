import React from 'react'
import s from './MyProfile.module.css'
import {MyAvatar} from './MyAvatar/MyAvatar'
import {MyInfo} from './MyInfo/MyInfo'
import {UserProfileType} from '../../../../types/types'

type MyProfilePropsType = {
    dataForProfile: UserProfileType
}

export const MyProfile: React.FC<MyProfilePropsType> = (props) => {
    const avatarSRC = props.dataForProfile.photos.large !== null
        ? props.dataForProfile.photos.large
        : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'

    return (
        <section className={s.wrapper}>
            <MyAvatar
                src={avatarSRC}
                alt={props.dataForProfile.fullName}/>
            <MyInfo title={props.dataForProfile.fullName}
                    aboutMe={props.dataForProfile.aboutMe}
            />
        </section>
    )
}