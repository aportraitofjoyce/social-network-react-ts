import React, {useMemo, useState} from 'react'
import s from './Pagination.module.css'
import {Button} from '@mui/material'

type PaginationPropsType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    portionSize?: number
    onClick: (page: number) => void
}

export const Pagination: React.FC<PaginationPropsType> = React.memo(props => {
    const {totalItemsCount, pageSize, currentPage, onClick, portionSize = 10} = props

    const totalPagesCount = useMemo(() => {
        let pagesCount = Math.ceil(totalItemsCount / pageSize)
        let pagesArray: number[] = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }
        return pagesArray
    }, [totalItemsCount, pageSize])

    const totalPortionsCount = Math.ceil(Math.ceil(totalItemsCount / pageSize) / portionSize)

    const [portionNumber, setPortionNumber] = useState<number>(1)

    const leftPortionNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize


    const prevPageHandler = () => setPortionNumber(portionNumber - 1)
    const nextPageHandler = () => setPortionNumber(portionNumber + 1)

    const pagesToRender = totalPagesCount
        .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
        .map(p => <span key={p}
                        className={currentPage === p ? s.currentPage : ''}
                        onClick={() => onClick(p)}>
            {p}
        </span>)

    return (
        <div className={s.paginationContainer}>
            <Button onClick={prevPageHandler} disabled={portionNumber <= 1} variant={'outlined'}>
                Prev
            </Button>
            {pagesToRender}
            <Button onClick={nextPageHandler} disabled={totalPortionsCount <= portionNumber} variant={'outlined'}>
                Next
            </Button>
        </div>
    )
})