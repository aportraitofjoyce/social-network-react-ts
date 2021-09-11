import React from 'react'
import {Login} from './Login'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../../../redux/actions/auth-actions'
import {PATH, StateType} from '../../../types/common-types'
import {AuthType} from '../../../types/auth-types'
import {Redirect} from 'react-router-dom'

export const LoginContainer: React.FC = () => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector<StateType, AuthType>(state => state.auth)

    const loginOnSite = (email: string, password: string, rememberMe: boolean) => dispatch(login(email, password, rememberMe))
    const logoutFromSite = () => dispatch(logout())

    return !isAuth ? <Login login={loginOnSite} logout={logoutFromSite}/> : <Redirect to={PATH.PROFILE}/>
}