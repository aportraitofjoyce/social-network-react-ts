import React from "react";
import s from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={s.wrapper}>
            <nav className={s.container}>

                <a href="#">
                    My profile
                </a>

                <a href="#">
                    Friends
                </a>

                <a href="#">
                    Messages
                </a>

                <a href="#">
                    Settings
                </a>

            </nav>
        </aside>
    )
}