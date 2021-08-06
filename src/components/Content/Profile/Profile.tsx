import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";
import {dataForMyPostsType, dataForMyProfileType} from "../../../redux/store";

type ProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
    addPost: () => void
    updatePost: (text: string) => void
    textForNewPost: string
    dataForMyPosts: dataForMyPostsType[]
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.wrapper}>
            <MyProfile dataForMyProfile={props.dataForMyProfile}/>

            <MyPosts
                dataForMyPosts={props.dataForMyPosts}
                textForNewPost={props.textForNewPost}
                addPost={props.addPost}
                updatePost={props.updatePost}/>
        </main>
    )
}