import React from 'react'
import {Link} from 'react-router-dom'
import s from './Header.module.css'
import {LogoIcon} from './LogoIcon'
import {HeaderPropsType} from './HeaderContainer'
import {PATH} from '../../../types/common-types'

export const Header: React.FC<HeaderPropsType> = (props) => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Link to={PATH.ROOT} className={s.logoWrapper}>
                    <LogoIcon/>
                    <span>Social Network</span>
                </Link>
                {
                    props.auth.isAuth
                        ? <div>
                            <span>{props.auth.login}</span>
                            <button onClick={() => props.logout()}>Logout</button>
                        </div>
                        : <Link to={PATH.LOGIN}>Login</Link>
                }
            </div>
        </div>
    )
}