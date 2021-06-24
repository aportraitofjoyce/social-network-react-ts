import React from "react";
import s from './Sidebar.module.css'

type dataForSidebarType = {
    name: string
    link: string
}

const dataForSidebar: Array<dataForSidebarType> = [
    {name: 'My profile', link: '#'},
    {name: 'Friends', link: '#'},
    {name: 'Messages', link: '#'},
    {name: 'Settings', link: '#'}
]

export function Sidebar() {
    return (
        <aside className={s.wrapper}>
            <nav className={s.container}>
            <SidebarItem name={dataForSidebar[0].name} link={dataForSidebar[0].link}/>
            <SidebarItem name={dataForSidebar[1].name} link={dataForSidebar[1].link}/>
            <SidebarItem name={dataForSidebar[2].name} link={dataForSidebar[2].link}/>
            <SidebarItem name={dataForSidebar[3].name} link={dataForSidebar[3].link}/>
            </nav>
        </aside>
    )
}

type SidebarItemPropsType = {
    link: string
    name: string
}
export function SidebarItem(props: SidebarItemPropsType) {
    return (
        <a href={props.link}>{props.name}</a>
    )
}

