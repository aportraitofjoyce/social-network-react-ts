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
import {Error404} from './components/Content/ErrorPage/Error404'
import {defaultTheme} from './components/UI/MUI/theme'
import {Container, CssBaseline, Grid, ThemeProvider} from '@mui/material'

const ProfileContainer = lazy(() => import('./components/Content/Profile/ProfileContainer'))
const DialogsContainer = lazy(() => import('./components/Content/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Content/Users/UsersContainer'))

export const App: React.FC = () => {
    const dispatch = useDispatch()
    const initialized = useSelector<StateType>(state => state.app.initialized)

    useEffect(() => {
        dispatch(initialization())
    }, [dispatch])

    if (!initialized) return <Loader/>

    return (
        <ThemeProvider theme={defaultTheme}>
            <>
                <CssBaseline/>
                <HeaderContainer/>

                <Container maxWidth='lg' style={{marginTop: 24, marginBottom: 24}}>
                    <Grid container spacing={3}>
                        <Grid item xs={2}>
                            <SidebarContainer/>
                        </Grid>

                        <Grid item xs={10}>
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

                                    <Route path={PATH.ERROR}>
                                        <Error404/>
                                    </Route>
                                </Switch>
                            </Suspense>
                        </Grid>
                    </Grid>
                </Container>
            </>
        </ThemeProvider>
    )
}