import s from "../Header.module.css";
import React from "react";

export function Search() {
    return (
        <nav className={s.search}>
            <input type="text"/>
        </nav>
    )
}