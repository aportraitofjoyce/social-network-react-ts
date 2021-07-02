import {NavLink} from "react-router-dom";
import s from "../Sidebar.module.css";
import React from "react";

type SidebarItemPropsType = {
    link: string
    name: string
}

export function SidebarItem(props: SidebarItemPropsType) {
    return <NavLink to={props.link} activeClassName={s.active}>{props.name}</NavLink>
}