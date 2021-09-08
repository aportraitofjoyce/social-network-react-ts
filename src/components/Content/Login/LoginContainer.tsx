import React from 'react'
import {Login} from './Login'
import {useDispatch} from 'react-redux'
import {checkAuthAndGetProfile, login} from '../../../redux/actions/auth-actions'

export const LoginContainer: React.FC = () => {

    const dispatch = useDispatch()

    const onSubmit = async (email: string, password: string, rememberMe: boolean) => {
        await login(email, password, rememberMe)
        await dispatch(checkAuthAndGetProfile())
    }

    return <Login onSubmit={onSubmit}/>
}