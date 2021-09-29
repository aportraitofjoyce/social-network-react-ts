import React from 'react'
import {Link} from 'react-router-dom'
import s from './Header.module.css'
import {LogoIcon} from './LogoIcon'
import {PATH} from '../../../types/common-types'
import {AuthType} from '../../../types/auth-types'
import {Button} from '@mui/material'

export type HeaderPropsType = {
    auth: AuthType
    logout: () => void
}

export const Header: React.FC<HeaderPropsType> = React.memo((props) => {
    const {auth, logout} = props

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Link to={PATH.ROOT} className={s.logoWrapper}>
                    <LogoIcon/>
                    <span>Social Network</span>
                </Link>

                {auth.isAuth
                    ? <div>
                        <span>{auth.login}</span>
                        <Button onClick={logout} variant={'contained'}>Logout</Button>
                    </div>
                    : <Link to={PATH.LOGIN}>Login Page</Link>}
            </div>
        </div>
    )
})