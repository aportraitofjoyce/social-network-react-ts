import React from 'react'
import s from './Sidebar.module.css'
import {SidebarItem} from './SidebarItem/SidebarItem'
import {v1} from 'uuid'
import {dataForSidebarType} from '../../../types/sidebar-types'

type SidebarPropsType = {
    dataForSidebar: dataForSidebarType[]
}

export const Sidebar: React.FC<SidebarPropsType> = React.memo(props => {
    const {dataForSidebar} = props

    const mappedSidebarItems = dataForSidebar.map(item => <SidebarItem key={v1()}
                                                                       name={item.name}
                                                                       link={item.link}/>)

    return (
        <aside className={s.wrapper}>
            <nav className={s.container}>
                {mappedSidebarItems}
            </nav>
        </aside>
    )
})

