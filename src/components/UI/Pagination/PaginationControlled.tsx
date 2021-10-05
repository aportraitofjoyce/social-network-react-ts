import React, {ChangeEvent} from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

type PaginationPropsType = {
    pagesCount: number
    currentPage: number
    onClick: (page: number) => void
}

export const PaginationControlled: React.FC<PaginationPropsType> = props => {
    const {pagesCount, currentPage, onClick} = props

    const handleChange = (e: ChangeEvent<unknown>, value: number) => {
        onClick(value)
    }

    return (
        <Stack spacing={2}>
            <Pagination count={pagesCount} page={currentPage} onChange={handleChange}/>
        </Stack>
    )
}