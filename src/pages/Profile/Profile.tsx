import React from 'react'
import s from './Profile.module.css'
import {MyProfile} from './MyProfile/MyProfile'
import {UserProfileType} from '../../redux/reducers/profile-reducer'

type ProfilePropsType = {
    userProfile: UserProfileType | null
    userStatus: string
    updateUserStatus: (status: string) => void
    isOwner: boolean
    updateUserAvatar: (avatarFile: File) => void
    updateUserDescription: (userDescription: UserProfileType) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo(props => {
    const {
        userProfile,
        userStatus,
        updateUserStatus,
        isOwner,
        updateUserAvatar,
        updateUserDescription
    } = props

    return (
        <main className={s.wrapper}>
            {userProfile && <MyProfile userProfile={userProfile}
			                           userStatus={userStatus}
			                           updateUserStatus={updateUserStatus}
			                           isOwner={isOwner}
			                           updateUserAvatar={updateUserAvatar}
			                           updateUserDescription={updateUserDescription}/>}
        </main>
    )
})