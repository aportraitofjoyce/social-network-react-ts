import React from "react";
import s from './Header.module.css'
import {Logo} from "./Logo/Logo";
import {Search} from "./Search/Search";
import {MiniProfile} from "./MiniProfile/MiniProfile";
import {dataForHeader} from "../../index";

export function Header() {
    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <Logo href={dataForHeader.href}/>
                <Search/>
                <MiniProfile src={dataForHeader.src} alt={dataForHeader.alt}/>
            </div>
        </header>
    )
}

