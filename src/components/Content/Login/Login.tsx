import React from 'react'
import s from './Login.module.css'
import {LoginForm} from './LoginForm/LoginForm'

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: any, captcha: string) => void
    logout: () => void
    captchaURL: string
}

export const Login: React.FC<LoginPropsType> = React.memo(props => {
    const {login, logout, captchaURL} = props

    return (
        <div className={s.fromWrapper}>
            <h1>Login page</h1>
            <LoginForm onSubmit={login} captchaURL={captchaURL}/>
            <button onClick={logout}>Logout</button>
        </div>
    )
})