import React from "react";
import {Sidebar} from "./Sidebar/Sidebar";
import {Profile} from "./Profile/Profile";

export function Content() {
    return (
        <main>
            <Sidebar />
            <Profile />
        </main>
    )
}