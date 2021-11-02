import React, {useCallback} from 'react'
import {Link} from 'react-router-dom'
import {LogoIcon} from './LogoIcon'
import {AuthType} from '../../../types/auth-types'
import {AppBar, Avatar, Box, Button, IconButton, Toolbar, Typography} from '@mui/material'
import {useDispatch, useSelector} from 'react-redux'
import {PATH} from '../../../routes/routes'
import {RootState} from '../../../redux/store'
import {logout} from '../../../redux/reducers/auth-reducer'

export const Header: React.FC = React.memo(() => {
    const auth = useSelector<RootState, AuthType>(state => state.auth)
    const dispatch = useDispatch()

    const logoutHandler = useCallback(() => dispatch(logout()), [dispatch])

    return (
        <AppBar position='sticky'>
            <Toolbar>
                <IconButton
                    href={PATH.ROOT}
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='menu'
                    sx={{mr: 2}}>
                    <LogoIcon/>
                </IconButton>

                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                    Social Network
                </Typography>

                {auth.isAuth
                    ? <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
                        <span>{auth.login}</span>
                        <Avatar alt={''} src={'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album'}/>
                        <Button onClick={logoutHandler} variant={'contained'} sx={{ml: 2}}>Logout</Button>
                    </Box>
                    : <Link to={PATH.LOGIN}>Login Page</Link>}
            </Toolbar>
        </AppBar>
    )
})