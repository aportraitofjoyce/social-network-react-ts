import React from "react";
import s from './Header.module.css'
import {Logo} from "./Logo/Logo";
import {Search} from "./Search/Search";
import {MiniProfile} from "./MiniProfile/MiniProfile";
import {HeaderType} from "../../redux/state";

type HeaderDataForHeaderPropsType = {
    headerData: HeaderType
}

export function Header(props: HeaderDataForHeaderPropsType) {
    return (
        <header className={s.wrapper}>
            <div className={s.container}>
                <Logo href={props.headerData.dataForHeader.href}/>
                <Search/>
                <MiniProfile src={props.headerData.dataForHeader.src} alt={props.headerData.dataForHeader.alt}/>
            </div>
        </header>
    )
}

