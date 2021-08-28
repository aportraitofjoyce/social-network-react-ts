import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import './index.css'
import {DialogsContainer} from './components/Content/Dialogs/DialogsContainer'
import {SidebarContainer} from './components/Content/Sidebar/SidebarContainer'
import ProfileContainer from './components/Content/Profile/ProfileContainer'
import UsersContainer from './components/Content/Users/UsersContainer'
import HeaderContainer from './components/Content/Header/HeaderContainer'

export const PATH = {
    PROFILE: '/profile/:userId?',
    PROFILE_CLEAR: '/profile',
    DIALOGS: '/dialogs',
    USERS: '/users',
    LOGIN: '/login'
}

export const App = () => {
    return (
        <div className={'App'}>
            <HeaderContainer/>
            <div className={'ContentWrapper'}>
                <SidebarContainer/>
                <Switch>
                    <Route path={'/'}
                           exact
                           render={() => <Redirect to={PATH.PROFILE_CLEAR}/>}/>
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