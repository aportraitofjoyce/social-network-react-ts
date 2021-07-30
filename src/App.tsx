import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import './App.css';
import {Sidebar} from "./components/Content/Sidebar/Sidebar";
import {Dialogs} from "./components/Content/Dialogs/Dialogs";
import {Profile} from "./components/Content/Profile/Profile";
import {Header} from "./components/Content/Header/Header";

type AppPropsType = {
    store: any
}

const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
}

export const App: React.FC<AppPropsType> = (props) => {
    return (
        <div className={'App'}>
            <Header/>
            <div className={'contentWrapper'}>
                <Sidebar store={props.store}/>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>

                    <Route path={PATH.DIALOGS}
                           render={() => <Dialogs store={props.store}/>}
                    />

                    <Route path={PATH.PROFILE}
                           render={() => <Profile store={props.store}/>}
                    />
                </Switch>
            </div>
        </div>
    )
}

