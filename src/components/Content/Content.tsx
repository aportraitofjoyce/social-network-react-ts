import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import s from './Content.module.css'
import {Sidebar} from "./Sidebar/Sidebar"
import {Profile} from "./Profile/Profile"
import {Dialogs} from "./Dialogs/Dialogs"
import {ContentType} from "../../redux/state";

type ContentPropsType = {
    contentData: ContentType
}

export function Content(props: ContentPropsType) {
    return (
        <BrowserRouter>
            <main className={s.wrapper}>
                <Sidebar dataForSidebar={props.contentData.sidebar.dataForSidebar}/>

                <Route path='/dialogs'
                       render={() => <Dialogs
                           dataForFriends={props.contentData.dialogs.dataForFriends}
                           dataForMessages={props.contentData.dialogs.dataForMessages}
                       />}/>

                <Route path='/profile'
                       render={() => <Profile
                           dataForMyProfile={props.contentData.profile.dataForMyProfile}
                           dataForMyPosts={props.contentData.profile.dataForMyPosts}
                       />}/>

                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </main>
        </BrowserRouter>
    )
}

function Friends() {
    return <div>Friends</div>
}

function News() {
    return <div>News</div>
}

function Settings() {
    return <div>Settings</div>
}