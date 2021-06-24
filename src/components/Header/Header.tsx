import React from "react";
import s from './Header.module.css'

const dataForHeader: dataForHeaderType = {
    href: '#',
    src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
    alt: 'Mini profile'
}

type dataForHeaderType = {
    href: string
    src: string
    alt: string
}

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

type LogoPropsType = {
    href: string
}

function Logo(props: LogoPropsType) {
    return (<div className={s.logo_wrapper}>
            <a href={props.href}>
                <b>Social Network</b>
            </a>
        </div>
    )
}

function Search() {
    return (
        <nav className={s.search}>
            <input type="text"/>
        </nav>
    )
}


type MiniProfileType = {
    src: string
    alt: string
}

function MiniProfile(props: MiniProfileType) {
    return (
        <div className={s.mini_profile}>
            <img src={props.src} alt={props.alt}/>
        </div>
    )
}