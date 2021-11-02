import React from 'react'
import s from './Error404.module.css'

export const Error404: React.FC = React.memo(() => {
    return (
        <div className={s.errorPageWrapper}>
            <div className={s.error404}>404</div>
            <img
                src='https://cdn.statically.io/img/i.pinimg.com/originals/ef/0b/58/ef0b58bc4be3f9622c10a73fe685c57d.jpg'
                alt=''
                className={s.errorImg}/>

            <div className={s.pageNotFound}>
                Page not found!
            </div>
        </div>
    )
})