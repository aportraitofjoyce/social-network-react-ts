import React from 'react'
import s from './Login.module.css'
import {LoginForm} from './LoginForm/LoginForm'

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    logout: () => void
}

export const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div className={s.fromWrapper}>
            <h1>Login page</h1>
            <LoginForm onSubmit={props.login}/>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}