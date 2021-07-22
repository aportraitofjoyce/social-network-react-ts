import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";
import {ActionsType, dataForMyPostsType, dataForMyProfileType} from "../../../redux/state";

type ProfilePropsType = {
    dataForMyProfile: dataForMyProfileType
    dataForMyPosts: dataForMyPostsType[]
    dispatch: (action: ActionsType) => void
    textForNewPost: string
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    return (
        <main className={s.wrapper}>
            <MyProfile dataForMyProfile={props.dataForMyProfile}/>
            <MyPosts
                dataForMyPosts={props.dataForMyPosts}
                dispatch={props.dispatch}
                textForNewPost={props.textForNewPost}
            />
        </main>
    )
}