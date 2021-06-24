import React from "react";
import s from './Header.module.css'

export function Header() {
    return (
        <header className={s.wrapper}>

            <div className={s.container}>

                <div className={s.logo_wrapper}>
                    <a href="">
                        <b>Social Network</b>
                    </a>
                </div>

                <nav className={s.search}>
                    <input type="text"/>
                </nav>

                <nav className={s.links}>
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Blog</a>
                </nav>

                <div className={s.mini_profile}>
                    {/*<button>Sign up</button>*/}
                    <img src="https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album" alt="Mini profile"/>
                </div>
            </div>

        </header>
    )
}