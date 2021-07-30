import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {MyProfile} from "./MyProfile/MyProfile";
import {ProfileType} from "../../../redux/redux-store";

type ProfilePropsType = {
    store: any
}

export const Profile: React.FC<ProfilePropsType> = (props) => {
    const state: ProfileType = props.store.getState().profile

    return (
        <main className={s.wrapper}>
            <MyProfile state={state.dataForMyProfile}/>

            <MyPosts
                dispatch={props.store.dispatch}
                state={state}
            />
        </main>
    )
}