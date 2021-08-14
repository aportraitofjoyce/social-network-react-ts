import React from 'react'
import {NavLink} from 'react-router-dom'
import s from './Header.module.css'
import {LogoIcon} from './LogoIcon'

export const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <NavLink to={'/'} className={s.logoWrapper}><LogoIcon/><span>Social Network</span></NavLink>
                <img
                    src="https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album"
                    alt="mini-profile"
                    className={s.miniProfileImg}/>
            </div>
        </div>
    )
}