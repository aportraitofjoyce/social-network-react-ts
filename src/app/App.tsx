import React, {FC, Suspense, useEffect} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import '../index.css'
import {Sidebar} from '../components/Sidebar/Sidebar'
import {useDispatch} from 'react-redux'
import {Loader} from '../components/UI/Loader/Loader'
import {Box, Container, CssBaseline, Fab, Grid} from '@mui/material'
import {Header} from '../components/Header/Header'
import {ScrollTop} from '../components/UI/ScrollTop/ScrollTop'
import {initialization} from '../redux/reducers/app-reducer'
import {PATH, publicRoutes} from '../routes/routes'
import {useAppSelector} from '../hooks/hooks'

export const App: FC = () => {
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
                                {publicRoutes.map(r => <Route key={r.path} path={r.path}
                                                              component={r.component} exact={r.exact}/>)}
                                <Redirect from={PATH.EMPTY} to={PATH.ERROR}/>
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