import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import './index.css'
import {SidebarContainer} from './components/Content/Sidebar/SidebarContainer'
import ProfileContainer from './components/Content/Profile/ProfileContainer'
import UsersContainer from './components/Content/Users/UsersContainer'
import HeaderContainer from './components/Content/Header/HeaderContainer'
import {PATH} from './types/common-types'
import {Error404} from './components/Content/ErrorPage/Error404'
import DialogsContainer from './components/Content/Dialogs/DialogsContainer'
import {LoginContainer} from './components/Content/Login/LoginContainer'

export const App = () => {
    return (
        <div className={'App'}>
            <HeaderContainer/>

            <div className={'ContentWrapper'}>
                <SidebarContainer/>

                <Switch>
                    <Route path={PATH.ROOT} exact>
                        <Redirect to={PATH.PROFILE}/>
                    </Route>

                    <Route path={PATH.PROFILE_WITH_ID}>
                        <ProfileContainer/>
                    </Route>

                    <Route path={PATH.DIALOGS}>
                        <DialogsContainer/>
                    </Route>

                    <Route path={PATH.USERS}>
                        <UsersContainer/>
                    </Route>

                    <Route path={PATH.LOGIN}>
                        <LoginContainer/>
                    </Route>

                    <Route>
                        <Error404/>
                    </Route>

                </Switch>
            </div>
        </div>
    )
}