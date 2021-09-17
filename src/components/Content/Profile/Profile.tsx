import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {MyProfile} from './MyProfile/MyProfile'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'

type ProfilePropsType = {
    dataForMyPosts: dataForMyPostsType[]
    userProfile: UserProfileType | null
    userStatus: string
    addPost: (text: string) => void
    updateUserStatus: (status: string) => void
    isOwner: boolean
    updateUserAvatar: (avatarFile: File) => void
    updateUserDescription: (userDescription: UserProfileType) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo(props => {
    const {
        dataForMyPosts,
        userProfile,
        userStatus,
        addPost,
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

            {isOwner && <MyPosts dataForMyPosts={dataForMyPosts}
                                 addPost={addPost}/>}
        </main>
    )
})