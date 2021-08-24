import React from 'react'
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts'
import {MyProfile} from './MyProfile/MyProfile'
import {dataForMyPostsType, dataForMyProfileType} from '../../../types/types'
import {useDispatch} from 'react-redux'
import {addPostAC, updatePostAC} from '../../../redux/actions/profileActions'

type ProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
    addPost: () => void
    updatePost: (text: string) => void
    textForNewPost: string
    dataForMyPosts: dataForMyPostsType[]
}

export const Profile: React.FC<ProfilePropsType> = (props) => {

    const dispatch = useDispatch()

    const addPost = () => {
        dispatch(addPostAC())
    }

    const updatePost = (text: string) => {
        dispatch(updatePostAC(text))
    }

    return (
        <main className={s.wrapper}>
            <MyProfile dataForMyProfile={props.dataForMyProfile}/>

            <MyPosts
                dataForMyPosts={props.dataForMyPosts}
                textForNewPost={props.textForNewPost}
                addPost={addPost}
                updatePost={updatePost}/>
        </main>
    )
}