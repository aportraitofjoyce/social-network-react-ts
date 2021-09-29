import React from 'react'
import s from './Login.module.css'
import {LoginForm} from './LoginForm/LoginForm'

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean,
            setStatus: (status: string[]) => void, captcha: string) => void
    captchaURL: string
}

export const Login: React.FC<LoginPropsType> = React.memo(props => {
    const {login, captchaURL} = props

    return (
        <div className={s.fromWrapper}>
            <h1>Login page</h1>
            <LoginForm onSubmit={login} captchaURL={captchaURL}/>
        </div>
    )
})