import React from 'react'
import {Header} from './Header'
import {StateType} from '../../../types/common-types'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../../../redux/actions/auth-actions'
import {AuthType} from '../../../types/auth-types'

export const HeaderContainer: React.FC = () => {
    const auth = useSelector<StateType, AuthType>(state => state.auth)
    const dispatch = useDispatch()

    const logoutHandler = () => dispatch(logout())

    return <Header auth={auth} logout={logoutHandler}/>
}