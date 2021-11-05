import React, {FC, memo} from 'react'
import s from './Login.module.css'
import {LoginForm} from './LoginForm/LoginForm'
import {useAppSelector} from '../../hooks/hooks'
import {Redirect} from 'react-router-dom'
import {PATH} from '../../routes/routes'

export const Login: FC = memo(() => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (isAuth) return <Redirect to={PATH.PROFILE}/>

    return (
        <div className={s.container}>
            <h1>Login page</h1>
            <LoginForm/>
            <div>
                <p>To login, you can register <a href={'https://social-network.samuraijs.com/'}
                                                 rel={'noreferrer'}
                                                 target={'_blank'}>here</a></p>
            </div>
            <div>
                <p>Or use next data to login:</p>
                <p>aportraitofjoyce@gmail.com</p>
                <p>123456789</p>
            </div>
        </div>
    )
})