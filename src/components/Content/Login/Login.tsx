import React from 'react'
import s from './Login.module.css'
import {LoginForm} from './LoginForm/LoginForm'

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, setStatus: any) => void
    logout: () => void
}

export const Login: React.FC<LoginPropsType> = React.memo(props => {
    const {login, logout} = props

    return (
        <div className={s.fromWrapper}>
            <h1>Login page</h1>
            <LoginForm onSubmit={login}/>
            <button onClick={logout}>Logout</button>
        </div>
    )
})