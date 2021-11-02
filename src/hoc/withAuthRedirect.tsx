import React, {ComponentType} from 'react'
import {Redirect} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {PATH} from '../routes/routes'
import {RootState} from '../redux/store'

type WithAuthRedirectProps = {
    isAuth: boolean
}

export const withAuthRedirect = <ComponentProps extends WithAuthRedirectProps>(Component: ComponentType<ComponentProps>) => {

    const AuthRedirect: React.FC<WithAuthRedirectProps & ComponentProps> = props => {
        const isAuth = useSelector<RootState>(state => state.auth.isAuth)

        if (!isAuth) return <Redirect to={PATH.LOGIN}/>
        return <Component {...props}/>
    }

    return AuthRedirect
}