import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {MyProfile} from './MyProfile/MyProfile'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'

type ProfilePropsType = {
    dataForMyPosts: dataForMyPostsType[]
    userProfile: UserProfileType | null
    userStatus: string
    authID: number | null
    addPost: (text: string) => void
    updateUserStatus: (status: string) => void
    isOwner: boolean
    updateUserAvatar: (avatarFile: File) => void
}

export const Profile: React.FC<ProfilePropsType> = React.memo(props => {
    const {dataForMyPosts, userProfile, userStatus, addPost, updateUserStatus, isOwner, updateUserAvatar} = props

    return (
        <main className={s.wrapper}>
            {userProfile && <MyProfile dataForProfile={userProfile}
                                       userStatus={userStatus}
                                       updateUserStatus={updateUserStatus}
                                       isOwner={isOwner}
                                       updateUserAvatar={updateUserAvatar}/>}

            {isOwner && <MyPosts dataForMyPosts={dataForMyPosts}
                                 addPost={addPost}/>}
        </main>
    )
})