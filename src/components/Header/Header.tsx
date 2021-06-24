import React from "react";
import s from './Header.module.css'

export function Header() {
    return (
        <header>
            <div className={s.logo}>logo</div>

            <nav className={s.search}>
                <input type="text"/>
            </nav>

            <nav className={s.links}>
                <a href="#">Home</a>
                <a href="#">About Us</a>
                <a href="#">Blog</a>
            </nav>

            <nav className={s.sign_up}>
                <a href="#" className={`${s.link} ${s.active}`}>Sing up</a>
            </nav>

        </header>
    )
}