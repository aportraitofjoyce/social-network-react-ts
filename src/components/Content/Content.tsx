import React from "react";
import s from './Content.module.css'
import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";


export function Content() {
    return (
        <main className={s.wrapper}>
            <Sidebar/>
            <Profile/>
        </main>
    )
}