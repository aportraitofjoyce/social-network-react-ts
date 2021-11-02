import React from 'react'
import s from './MyProfile.module.css'
import {MyAvatar} from './MyAvatar/MyAvatar'
import {MyInfo} from './MyInfo/MyInfo'
import {UserProfileType} from '../../../redux/reducers/profile-reducer'

type MyProfilePropsType = {
    userProfile: UserProfileType
    userStatus: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    updateUserAvatar: (avatarFile: File) => void
    updateUserDescription: (userDescription: UserProfileType) => void
}

export const MyProfile: React.FC<MyProfilePropsType> = React.memo(props => {
    const {userProfile, userStatus, updateUserStatus, isOwner, updateUserAvatar, updateUserDescription} = props

    const avatarSRC = userProfile.photos.large || 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'

    return (
        <section className={s.wrapper}>
            <MyAvatar
                src={avatarSRC}
                alt={userProfile.fullName}
                isOwner={isOwner}
                updateUserAvatar={updateUserAvatar}/>

            <MyInfo userProfile={userProfile}
                    userStatus={userStatus}
                    updateUserStatus={updateUserStatus}
                    isOwner={isOwner}
                    updateUserDescription={updateUserDescription}/>
        </section>
    )
})