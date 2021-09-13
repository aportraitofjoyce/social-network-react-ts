import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {MyProfile} from './MyProfile/MyProfile'
import {dataForMyPostsType, UserProfileType} from '../../../types/profile-types'

type ProfilePropsType = {
    dataForMyPosts: dataForMyPostsType[]
    userProfile: UserProfileType | null
    userStatus: string | null
    authID: string | number | null
    addPost: (text: string) => void
    updateUserStatus: (status: string) => void
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.wrapper}>
            {props.userProfile && <MyProfile dataForProfile={props.userProfile}
                                             userStatus={props.userStatus}
                                             updateUserStatus={props.updateUserStatus}/>}

            {props.userProfile && props.userProfile.userId === props.authID
                ? <MyPosts
                    dataForMyPosts={props.dataForMyPosts}
                    addPost={props.addPost}/>
                : ''}
        </main>
    )
}