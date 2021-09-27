import React from 'react'
import s from './Sidebar.module.css'
import {v1} from 'uuid'
import {dataForSidebarType} from '../../../types/sidebar-types'
import {NavLink} from 'react-router-dom'

type SidebarPropsType = {
    dataForSidebar: dataForSidebarType[]
}

export const Sidebar: React.FC<SidebarPropsType> = React.memo(props => {
    const {dataForSidebar} = props

    const mappedSidebarItems = dataForSidebar.map(item => {
        return (
            <NavLink key={v1()}
                     to={item.link}
                     activeClassName={s.active}>
                <span>{item.name}</span>
            </NavLink>
        )
    })

    return (
        <aside className={s.wrapper}>
            <nav className={s.container}>
                {mappedSidebarItems}
            </nav>
        </aside>
    )
})

