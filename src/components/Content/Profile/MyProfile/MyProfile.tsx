import React from 'react'
import s from './MyProfile.module.css'
import {MyAvatar} from './MyAvatar/MyAvatar'
import {MyInfo} from './MyInfo/MyInfo'
import {dataForMyProfileType} from '../../../../types/types'

type MyProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
}

export const MyProfile: React.FC<MyProfilePropsType> = (props) => {
    return (
        <section className={s.wrapper}>
            <MyAvatar src={props.dataForMyProfile.photos.large}
                      alt={props.dataForMyProfile.fullName}/>
            <MyInfo title={props.dataForMyProfile.fullName}
                    aboutMe={props.dataForMyProfile.aboutMe}
            />
        </section>
    )
}