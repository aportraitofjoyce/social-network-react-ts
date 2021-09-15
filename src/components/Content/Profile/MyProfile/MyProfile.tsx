import React, {useMemo} from 'react'
import s from './MyProfile.module.css'
import {MyAvatar} from './MyAvatar/MyAvatar'
import {MyInfo} from './MyInfo/MyInfo'
import {UserProfileType} from '../../../../types/profile-types'

type MyProfilePropsType = {
    dataForProfile: UserProfileType
    userStatus: string
    updateUserStatus: (status: string) => void
}

export const MyProfile: React.FC<MyProfilePropsType> = React.memo(props => {
    const {dataForProfile, userStatus, updateUserStatus} = props

    const avatarSRC = useMemo(() => dataForProfile.photos.large !== null
        ? dataForProfile.photos.large
        : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg', [dataForProfile.photos.large])

    return (
        <section className={s.wrapper}>
            <MyAvatar
                src={avatarSRC}
                alt={dataForProfile.fullName}/>

            <MyInfo title={dataForProfile.fullName}
                    userStatus={userStatus}
                    updateUserStatus={updateUserStatus}/>
        </section>
    )
})