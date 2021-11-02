import React, {FC, memo} from 'react'
import s from './Error404.module.css'

export const Error404: FC = memo(() => {
    return (
        <div className={s.container}>
            <h1>Page not found!</h1>
            <img
                src='https://cdn.statically.io/img/i.pinimg.com/originals/ef/0b/58/ef0b58bc4be3f9622c10a73fe685c57d.jpg'
                alt='page-not-found'/>
        </div>
    )
})