import React from "react";
import s from './Sidebar.module.css'
import {SidebarItem} from "./SidebarItem/SidebarItem";
import {SidebarType, StoreType} from "../../../redux/redux-store";
import {v1} from "uuid";

type SidebarPropsType = {
    store: StoreType
}

export const Sidebar: React.FC<SidebarPropsType> = (props) => {
    const state: SidebarType = props.store.getState().sidebar

    const mappedSidebarItems = state.dataForSidebar.map(item => {
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

