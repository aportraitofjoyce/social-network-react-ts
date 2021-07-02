import React from "react"
import {BrowserRouter, Route} from "react-router-dom"
import s from './Content.module.css'
import {Sidebar} from "./Sidebar/Sidebar"
import {Profile} from "./Profile/Profile"
import {Dialogs} from "./Dialogs/Dialogs"

export function Content() {
    return (
        <BrowserRouter>
            <main className={s.wrapper}>
                <Sidebar/>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/friends' component={Friends}/>
                <Route path='/news' component={News}/>
                <Route path='/settings' component={Settings}/>
            </main>
        </BrowserRouter>
    )
}

// Заглушки
function Friends() {
    return <div>Friends</div>
}

function News() {
    return <div>News</div>
}

function Settings() {
    return <div>Settings</div>
}