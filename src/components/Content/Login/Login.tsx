import React from 'react'
import s from './Login.module.css'
import {LoginForm} from './LoginForm/LoginForm'

type LoginPropsType = {
    onSubmit: (email: string, password: string, rememberMe: boolean) => void
}

export const Login: React.FC<LoginPropsType> = (props) => {
    return (
        <div className={s.fromWrapper}>
            <h1>Login page</h1>
            <LoginForm onSubmit={props.onSubmit}/>
        </div>
    )
}