import React, {lazy, Suspense, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import '../index.css'
import {Sidebar} from '../components/Sidebar/Sidebar'
import {useDispatch} from 'react-redux'
import {Loader} from '../components/UI/Loader/Loader'
import {Error404} from '../pages/ErrorPage/Error404'
import {Box, Container, CssBaseline, Fab, Grid} from '@mui/material'
import {Header} from '../components/Header/Header'
import {ScrollTop} from '../components/UI/ScrollTop/ScrollTop'
import {initialization} from '../redux/reducers/app-reducer'
import {PATH} from '../routes/routes'
import {useAppSelector} from '../hooks/hooks'
import {Login} from '../pages/Login/Login'

const Profile = lazy(() => import('../pages/Profile/Profile'))
const DialogsContainer = lazy(() => import('../pages/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('../pages/Users/UsersContainer'))

export const App: React.FC = () => {
    const dispatch = useDispatch()
    const isInitialized = useAppSelector(state => state.app.isInitialized)

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
                        <Sidebar/>
                    </Grid>

                    <Grid item xs={10}>
                        <Suspense fallback={<Loader/>}>
                            <Switch>
                                <Route path={PATH.ROOT} exact>
                                    <Redirect to={PATH.PROFILE}/>
                                </Route>

                                <Route path={PATH.PROFILE_WITH_ID}>
                                    <Profile/>
                                </Route>

                                <Route path={PATH.DIALOGS}>
                                    <DialogsContainer/>
                                </Route>

                                <Route path={PATH.USERS}>
                                    <UsersContainer/>
                                </Route>

                                <Route path={PATH.LOGIN}>
                                    <Login/>
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