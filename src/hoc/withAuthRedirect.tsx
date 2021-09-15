import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom'
import {PATH, StateType} from '../types/common-types'
import {useSelector} from 'react-redux'

type AuthRedirectPropsType = {
    isAuth: boolean
}

export const withAuthRedirect = <T extends AuthRedirectPropsType>(Component: ComponentType<T>) => {
    const AuthRedirect: React.FC<AuthRedirectPropsType & T> = React.memo(props => {
        const isAuth = useSelector<StateType>(state => state.auth.isAuth)
        if (!isAuth) return <Redirect to={PATH.LOGIN}/>
        return <Component {...props}/>
    })
    return AuthRedirect
}