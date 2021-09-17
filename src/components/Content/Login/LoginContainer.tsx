import React, {useCallback} from 'react'
import {Login} from './Login'
import {useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../../../redux/actions/auth-actions'
import {PATH, StateType} from '../../../types/common-types'
import {AuthType} from '../../../types/auth-types'
import {Redirect} from 'react-router-dom'

export const LoginContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {isAuth, captchaURL} = useSelector<StateType, AuthType>(state => state.auth)

    const loginOnSite = useCallback((email: string, password: string, rememberMe: boolean, setStatus: any, captcha: string) => {
        dispatch(login(email, password, rememberMe, setStatus, captcha))
    }, [dispatch])

    const logoutFromSite = useCallback(() => dispatch(logout()), [dispatch])

    return !isAuth
        ? <Login login={loginOnSite} logout={logoutFromSite} captchaURL={captchaURL}/>
        : <Redirect to={PATH.PROFILE}/>
})