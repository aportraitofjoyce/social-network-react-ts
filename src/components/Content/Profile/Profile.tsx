import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {MyProfile} from './MyProfile/MyProfile'
import {ProfilePropsType} from './ProfileContainer'

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.wrapper}>
            {props.userProfile && <MyProfile dataForProfile={props.userProfile}/>}

            {props.userProfile && props.userProfile.userId === 18964
                ? <MyPosts
                    dataForMyPosts={props.dataForMyPosts}
                    textForNewPost={props.textForNewPost}
                    addPost={props.addPost}
                    updatePost={props.updatePost}/>
                : ''}
        </main>
    )
}