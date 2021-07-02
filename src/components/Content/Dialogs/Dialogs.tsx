import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'
import {dataForMyProfile} from "../Profile/MyProfile/MyProfile";

export function Dialogs() {
    return (
        <main className={s.wrapper}>
            <FriendsContainer/>
            <DialogsContainer/>
        </main>
    )
}

function FriendsContainer() {
    return (
        <div className={s.friendsContainer}>
            <NavLink to='/dialogs/1' className={s.friend} activeClassName={s.active}>Me</NavLink>
            <NavLink to='/dialogs/2' className={s.friend} activeClassName={s.active}>Maxim</NavLink>
            <NavLink to='/dialogs/3' className={s.friend} activeClassName={s.active}>Andrei</NavLink>
            <NavLink to='/dialogs/4' className={s.friend} activeClassName={s.active}>Yura</NavLink>
        </div>
    )
}

function DialogsContainer() {
    return (
        <div className={s.dialogsContainer}>
            <MeSay/>
            <FriendSay/>
        </div>
    )
}

function MeSay() {
    return (
        <div className={s.meSay}>
            <div className={s.avatar}>
                <img src={dataForMyProfile.src} alt={dataForMyProfile.alt}/>
            </div>
            <div className={s.myMessage}>
                Я: Собаку выебал бы?
            </div>
        </div>
    )
}

function FriendSay() {
    return (
        <div className={s.friendSay}>
            <div className={s.avatar}>
                <img src={dataForMyProfile.src} alt={dataForMyProfile.alt}/>
            </div>
            <div className={s.friendMessage}>
                Andrei: Еще бы)))))
            </div>
        </div>
    )
}