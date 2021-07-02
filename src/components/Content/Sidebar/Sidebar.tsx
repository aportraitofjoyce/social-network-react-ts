import React from "react";
import { NavLink } from "react-router-dom";
import s from './Sidebar.module.css'

type dataForSidebarType = {
    name: string
    link: string
}

type SidebarItemPropsType = {
    link: string
    name: string
}

const dataForSidebar: Array<dataForSidebarType> = [
    {name: 'My profile', link: '/profile'},
    {name: 'Messages', link: '/dialogs'},
    {name: 'Friends', link: '/friends'},
    {name: 'News', link: '/news'},
    {name: 'Settings', link: '/settings'}
]

export function Sidebar() {
    const mappedSidebarItems = dataForSidebar.map(item => {
        return <SidebarItem name={item.name} link={item.link}/>
    })

    return (
        <aside className={s.wrapper}>
            <nav className={s.container}>
                {mappedSidebarItems}
            </nav>
        </aside>
    )
}

export function SidebarItem(props: SidebarItemPropsType) {
    return <NavLink to={props.link} activeClassName={s.active}>{props.name}</NavLink>
}