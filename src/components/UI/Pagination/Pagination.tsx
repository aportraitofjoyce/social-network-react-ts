import React from 'react'
import s from './Pagination.module.css'

type PaginationPropsType = {
    pages: number[]
    currentPage: number
    onClick: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = React.memo(props => {
    const {pages, currentPage, onClick} = props

    const pagesToRender = pages.map(p => <span className={currentPage === p ? s.currentPage : ''}
                                               key={p}
                                               onClick={() => onClick(p)}>{p}</span>)

    return (
        <div className={s.paginationContainer}>
            {pagesToRender}
        </div>
    )
})