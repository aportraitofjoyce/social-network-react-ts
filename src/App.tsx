import React from 'react';
import './App.css';
import {StateType} from "./redux/state";
import s from "./components/Content/Content.module.css";
import {Route} from "react-router-dom";
import {Sidebar} from "./components/Content/Sidebar/Sidebar";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Profile} from "./components/Content/Profile/Profile";

type AppPropsType = {
    state: StateType
    dispatch: (action: object) => void
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'App'}>
            <main className={s.wrapper}>
                <Sidebar dataForSidebar={props.state.sidebar.dataForSidebar}/>

                <Route path='/dialogs'
                       render={() => <Dialogs
                           dataForFriends={props.state.dialogs.dataForFriends}
                           dataForMessages={props.state.dialogs.dataForMessages}
                           textForNewMessage={props.state.dialogs.newMessage.message}
                           dispatch={props.dispatch}
                       />}
                />

                <Route path='/profile'
                       render={() => <Profile
                           dataForMyProfile={props.state.profile.dataForMyProfile}
                           dataForMyPosts={props.state.profile.dataForMyPosts}
                           dispatch={props.dispatch}
                           textForNewPost={props.state.profile.newPost.text}
                       />}
                />
            </main>
        </div>
    )
}