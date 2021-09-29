import React from 'react'
import {Link} from 'react-router-dom'
import {LogoIcon} from './LogoIcon'
import {PATH} from '../../../types/common-types'
import {AuthType} from '../../../types/auth-types'
import {AppBar, Button, IconButton, Toolbar, Typography} from '@mui/material'

export type HeaderPropsType = {
    auth: AuthType
    logout: () => void
}

export const Header: React.FC<HeaderPropsType> = React.memo((props) => {
    const {auth, logout} = props

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
                    ? <div>
                        <span>{auth.login}</span>
                        <Button onClick={logout} variant={'contained'} sx={{ml: 2}}>Logout</Button>
                    </div>
                    : <Link to={PATH.LOGIN}>Login Page</Link>}
            </Toolbar>
        </AppBar>
    )
})