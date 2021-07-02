import React from "react";
import { NavLink } from "react-router-dom";
import s from './Sidebar.module.css'
import {SidebarItem} from "./SidebarItem/SidebarItem";

const dataForSidebar: Array<dataForSidebarType> = [
    {name: 'My profile', link: '/profile'},
    {name: 'Messages', link: '/dialogs'},
    {name: 'Friends', link: '/friends'},
    {name: 'News', link: '/news'},
    {name: 'Settings', link: '/settings'}
]

type dataForSidebarType = {
    name: string
    link: string
}

export function Sidebar() {
    const mappedSidebarItems = dataForSidebar.map((item: dataForSidebarType) => {
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

