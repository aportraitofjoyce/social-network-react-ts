import React, {lazy, Suspense, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import './index.css'
import {PATH, StateType} from './types/common-types'
import {LoginContainer} from './components/Content/Login/LoginContainer'
import {HeaderContainer} from './components/Content/Header/HeaderContainer'
import {SidebarContainer} from './components/Content/Sidebar/SidebarContainer'
import {useDispatch, useSelector} from 'react-redux'
import {initialization} from './redux/actions/app-actions'
import {Loader} from './components/UI/Loader/Loader'

const ProfileContainer = lazy(() => import('./components/Content/Profile/ProfileContainer'))
const DialogsContainer = lazy(() => import('./components/Content/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Content/Users/UsersContainer'))

export const App = React.memo(() => {
    const dispatch = useDispatch()
    const initialized = useSelector<StateType>(state => state.app.initialized)

    useEffect(() => {
        dispatch(initialization())
    }, [dispatch])

    if (!initialized) return <Loader/>

    return (
        <div className={'App'}>
            <HeaderContainer/>

            <div className={'ContentWrapper'}>
                <SidebarContainer/>

                <Suspense fallback={<Loader/>}>
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

                        {/*<Route>
                            <Error404/>
                        </Route>*/}
                    </Switch>
                </Suspense>
            </div>
        </div>
    )
})