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
                <Route path='/dialogs' render={ () => <Dialogs/>}/>
                <Route path='/profile' render={ () => <Profile/>}/>
                <Route path='/friends' render={ () => <Friends/>}/>
                <Route path='/news' render={ () => <News/>}/>
                <Route path='/settings' render={ () => <Settings/>}/>
            </main>
        </BrowserRouter>
    )
}

function Friends() {
    return <div>Friends</div>
}

function News() {
    return <div>News</div>
}

function Settings() {
    return <div>Settings</div>
}