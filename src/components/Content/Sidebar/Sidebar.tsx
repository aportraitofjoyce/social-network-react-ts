import React from "react";
import s from './Sidebar.module.css'
import {SidebarItem} from "./SidebarItem/SidebarItem";
import {dataForSidebarType, SidebarType} from "../../../redux/state";

export function Sidebar(props: SidebarType) {
    const mappedSidebarItems = props.dataForSidebar.map((item: dataForSidebarType) => {
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

