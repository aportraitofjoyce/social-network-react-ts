import React from 'react'
import {Redirect} from 'react-router-dom'
import {PATH, StateType} from '../types/common-types'
import {useSelector} from 'react-redux'
import {AuthType} from '../types/auth-types'


export const withAuthRedirectHOC = (Component: any) => {
    const AuthRedirectComponent: React.FC<any> = (props) => {
        const {isAuth} = useSelector<StateType, AuthType>(state => state.auth)

        if (!isAuth) return <Redirect to={PATH.LOGIN}/>

        return (
            <Component {...props}/>
        )
    }

    return AuthRedirectComponent
}