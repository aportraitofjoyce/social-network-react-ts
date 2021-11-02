import React, {lazy, Suspense, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import './index.css'
import {LoginContainer} from './components/Content/Login/LoginContainer'
import {SidebarContainer} from './components/Content/Sidebar/SidebarContainer'
import {useDispatch, useSelector} from 'react-redux'
import {Loader} from './components/UI/Loader/Loader'
import {Error404} from './components/Content/ErrorPage/Error404'
import {Box, Container, CssBaseline, Fab, Grid} from '@mui/material'
import {Header} from './components/Content/Header/Header'
import {ScrollTop} from './components/UI/ScrollTop/ScrollTop'
import {initialization} from './redux/reducers/app-reducer'
import {PATH} from './routes/routes'
import {RootState} from './redux/store'

const ProfileContainer = lazy(() => import('./components/Content/Profile/ProfileContainer'))
const DialogsContainer = lazy(() => import('./components/Content/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Content/Users/UsersContainer'))

export const App: React.FC = () => {
    const dispatch = useDispatch()
    const isInitialized = useSelector<RootState>(state => state.app.isInitialized)

    useEffect(() => {
        dispatch(initialization())
    }, [dispatch])

    if (!isInitialized) return <Loader/>

    return (
        <>
            <CssBaseline/>
            <Box id='back-to-top-anchor'/>
            <Header/>

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

            <ScrollTop>
                <Fab color='primary' aria-label='scroll back to top'>Up</Fab>
            </ScrollTop>
        </>
    )
}