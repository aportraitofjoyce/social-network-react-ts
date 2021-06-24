import React from "react";
import s from './MyProfile.module.css'


export function MyProfile() {
    return (
        <div className={s.wrapper}>
            <div className={s.avatar_wrapper}>
                <img
                    src="https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album"
                    alt="My profile"/>
            </div>

            <div className={s.info_wrapper}>Info</div>
        </div>
    )
}