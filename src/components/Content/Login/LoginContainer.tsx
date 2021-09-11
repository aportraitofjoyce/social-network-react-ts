import React from 'react'
import {Login} from './Login'
import {useDispatch} from 'react-redux'
import {login, logout} from '../../../redux/actions/auth-actions'

export const LoginContainer: React.FC = () => {
    const dispatch = useDispatch()

    const loginOnSite = (email: string, password: string, rememberMe: boolean) => dispatch(login(email, password, rememberMe))
    const logoutFromSite = () => dispatch(logout())

    return <Login onSubmit={loginOnSite} logout={logoutFromSite}/>
}