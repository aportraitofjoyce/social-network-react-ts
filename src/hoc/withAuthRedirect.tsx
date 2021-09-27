import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom'
import {PATH, StateType} from '../types/common-types'
import {useSelector} from 'react-redux'

type WithAuthRedirectPropsType = {
    isAuth: boolean
}

export const withAuthRedirect = <ComponentProps extends WithAuthRedirectPropsType>(Component: ComponentType<ComponentProps>) => {

    const AuthRedirect: React.FC<WithAuthRedirectPropsType & ComponentProps> = props => {
        const isAuth = useSelector<StateType>(state => state.auth.isAuth)

        if (!isAuth) return <Redirect to={PATH.LOGIN}/>
        return <Component {...props}/>
    }

    return AuthRedirect
}