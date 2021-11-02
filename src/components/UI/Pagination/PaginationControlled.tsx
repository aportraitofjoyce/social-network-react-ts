import React, {ChangeEvent, FC} from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

type PaginationProps = {
    pagesCount: number
    currentPage: number
    onClick: (page: number) => void
}

export const PaginationControlled: FC<PaginationProps> = props => {
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