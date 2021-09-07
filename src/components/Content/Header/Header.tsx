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
                        ? <Link to={PATH.LOGIN}>
                            <img
                                src={props.auth.avatar !== null ? props.auth.avatar : 'https://pbs.twimg.com/profile_images/1368235617243426820/L0m5gTDB.jpg'}
                                alt={props.auth.name !== null ? props.auth.name : ''}
                                className={s.miniProfileImg}/>
                        </Link>
                        : <Link to={PATH.LOGIN}>Login</Link>
                }
            </div>
        </div>
    )
}