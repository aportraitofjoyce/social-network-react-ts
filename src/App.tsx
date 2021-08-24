import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import './index.css'
import {Header} from './components/Content/Header/Header'
import {DialogsContainer} from './components/Content/Dialogs/DialogsContainer'
import {SidebarContainer} from './components/Content/Sidebar/SidebarContainer'
import {UsersContainer} from './components/Content/Users/UsersContainer'
import {ProfileContainer} from './components/Content/Profile/ProfileContainer'

const PATH = {
    PROFILE: '/profile',
    DIALOGS: '/dialogs',
    USERS: '/users'
}

export const App = () => {
    return (
        <div className={'App'}>
            <Header/>
            <div className={'ContentWrapper'}>
                <SidebarContainer/>
                <Switch>
                    <Route path={'/'} exact render={() => <Redirect to={PATH.PROFILE}/>}/>
                    <Route path={PATH.PROFILE}
                           render={() => <ProfileContainer/>}/>
                    <Route path={PATH.DIALOGS}
                           render={() => <DialogsContainer/>}/>
                    <Route path={PATH.USERS}
                           render={() => <UsersContainer/>}/>
                </Switch>
            </div>
        </div>
    )
}

