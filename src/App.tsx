import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {Header} from "./components/Content/Header/Header";
import {DialogsContainer} from "./components/Content/Dialogs/DialogsContainer";
import {ProfileContainer} from "./components/Content/Profile/ProfileContainer";
import {SidebarContainer} from "./components/Content/Sidebar/SidebarContainer";

const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
}

export const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <div className={'contentWrapper'}>
                <SidebarContainer/>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                    <Route path={PATH.PROFILE}
                           render={() => <ProfileContainer/>}/>
                    <Route path={PATH.DIALOGS}
                           render={() => <DialogsContainer/>}/>
                </Switch>
            </div>
        </div>
    )
}