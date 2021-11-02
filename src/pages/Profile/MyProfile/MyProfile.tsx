import React, {FC, memo} from 'react'
import s from './MyProfile.module.css'
import {MyAvatar} from './MyAvatar/MyAvatar'
import {MyInfo} from './MyInfo/MyInfo'
import {UserProfileType} from '../../../redux/reducers/profile-reducer'

type MyProfileProps = {
    userProfile: UserProfileType
    userStatus: string
    isOwner: boolean
}

export const MyProfile: FC<MyProfileProps> = memo(({userProfile, userStatus, isOwner}) => {
    const avatarSRC = userProfile.photos.large || 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'

    return (
        <section className={s.wrapper}>
            <MyAvatar src={avatarSRC}
                      alt={userProfile.fullName}
                      isOwner={isOwner}/>

            <MyInfo userProfile={userProfile}
                    userStatus={userStatus}
                    isOwner={isOwner}/>
        </section>
    )
})