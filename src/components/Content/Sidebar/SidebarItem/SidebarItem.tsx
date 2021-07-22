import React from "react";
import s from "../Sidebar.module.css";
import {NavLink} from "react-router-dom";

type SidebarItemPropsType = {
    link: string
    name: string
}

export const SidebarItem: React.FC<SidebarItemPropsType> = (props) => {
    return <NavLink to={props.link} activeClassName={s.active}>{props.name}</NavLink>
}