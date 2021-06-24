import React from "react";
import s from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={s.sidebar}>
            <nav className={'sidebar-links'}>
                <a href="#">Profile</a>
                <a href="#">Messages</a>
                <a href="#">News</a>
                <a href="#">Settings</a>
            </nav>
        </aside>
    )
}