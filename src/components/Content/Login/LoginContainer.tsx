import React, {useCallback} from 'react'
import {Login} from './Login'
import {useDispatch, useSelector} from 'react-redux'
import {AuthType} from '../../../types/auth-types'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../../routes/routes'
import {RootState} from '../../../redux/store'
import {login} from '../../../redux/reducers/auth-reducer'

export const LoginContainer: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {isAuth, captchaURL} = useSelector<RootState, AuthType>(state => state.auth)

    const loginOnSite = useCallback((email: string, password: string, rememberMe: boolean,
                                     setStatus: (status: string[]) => void, captcha: string) => {
        dispatch(login(email, password, rememberMe, setStatus, captcha))
    }, [dispatch])

    return !isAuth
        ? <Login login={loginOnSite} captchaURL={captchaURL}/>
        : <Redirect to={PATH.PROFILE}/>
})