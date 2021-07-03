import React from "react";
import s from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";

type SidebarItemPropsType = {
    link: string
    name: string
}

export function SidebarItem(props: SidebarItemPropsType) {
    return <NavLink to={props.link} activeClassName={s.active}>{props.name}</NavLink>
}