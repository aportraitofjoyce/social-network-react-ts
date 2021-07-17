import React from "react";
import s from './Sidebar.module.css'
import {SidebarItem} from "./SidebarItem/SidebarItem";
import {dataForSidebarType, SidebarType} from "../../../redux/state";
import {v1} from "uuid";

export function Sidebar(props: SidebarType) {

    const mappedSidebarItems = props.dataForSidebar.map((item: dataForSidebarType) => {
        return <SidebarItem key={v1()} name={item.name} link={item.link}/>
    })

    return (
        <aside className={s.wrapper}>
            <nav className={s.container}>
                {mappedSidebarItems}
            </nav>
        </aside>
    )
}

