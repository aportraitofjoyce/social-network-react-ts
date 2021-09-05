import React from 'react'
import s from './Pagination.module.css'

type PaginationPropsType = {
    pages: number[]
    currentPage: number
    onClick: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = (props) => {
    return (
        <div className={s.paginationContainer}>
            {props.pages.map(p => (
                <span className={props.currentPage === p ? s.currentPage : ''}
                      key={p}
                      onClick={() => props.onClick(p)}>
                    {p}
                </span>
            ))}
        </div>
    )
}