import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import s from "./components/./Content/Content.module.css"
import {Sidebar} from "./components/Content/Sidebar/Sidebar";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Profile} from "./components/Content/Profile/Profile";
import {Header} from "./components/Content/Header/Header";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    dispatch: (action: object) => void
}

const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'App'}>
            <Header/>
            <div className={s.wrapper}>
                <Sidebar dataForSidebar={props.state.sidebar.dataForSidebar}/>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                    <Route path={PATH.DIALOGS}
                           render={() => <Dialogs
                               dataForFriends={props.state.dialogs.dataForFriends}
                               dataForMessages={props.state.dialogs.dataForMessages}
                               textForNewMessage={props.state.dialogs.newMessage.message}
                               dispatch={props.dispatch}/>}
                    />
                    <Route path={PATH.PROFILE}
                           render={() => <Profile
                               dataForMyProfile={props.state.profile.dataForMyProfile}
                               dataForMyPosts={props.state.profile.dataForMyPosts}
                               dispatch={props.dispatch}
                               textForNewPost={props.state.profile.newPost.text}/>}
                    />
                </Switch>
            </div>
        </div>
    )
}

