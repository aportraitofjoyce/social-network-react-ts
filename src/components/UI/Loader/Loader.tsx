import React from 'react'
import s from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={s.loadingWrapper}>
            <div className={s.loading}>
                <div/>
                <div/>
            </div>
        </div>
    )
}