import React from 'react';
import './App.css';
import {StateType} from "./redux/state";
import s from "./components/Content/Content.module.css";
import {BrowserRouter, Route} from "react-router-dom";
import {Sidebar} from "./components/Content/Sidebar/Sidebar";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Profile} from "./components/Content/Profile/Profile";

type AppPropsType = {
    state: StateType
    addPost: () => void
    updatePostText: (postText: string) => void
    sendMessage: () => void
    updateMessageText: (text: string) => void
}

export function App(props: AppPropsType) {
    return (
        <div className={'App'}>
            <BrowserRouter>
                <main className={s.wrapper}>
                    <Sidebar dataForSidebar={props.state.sidebar.dataForSidebar}/>

                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dataForFriends={props.state.dialogs.dataForFriends}
                               dataForMessages={props.state.dialogs.dataForMessages}
                               sendMessage={props.sendMessage}
                               updateMessageText={props.updateMessageText}
                               textForNewMessage={props.state.dialogs.newMessage.message}
                           />}/>

                    <Route path='/profile'
                           render={() => <Profile
                               dataForMyProfile={props.state.profile.dataForMyProfile}
                               dataForMyPosts={props.state.profile.dataForMyPosts}
                               addPost={props.addPost}
                               updatePostText={props.updatePostText}
                               textForNewPost={props.state.profile.newPost.text}
                           />}/>
                </main>
            </BrowserRouter>
        </div>
    )
}