import React, {FC, memo} from 'react'
import {Backdrop, CircularProgress} from '@mui/material'

export const Loader: FC = memo(() => {
    return (
        <Backdrop sx={{color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1}} open>
            <CircularProgress color='inherit'/>
        </Backdrop>
    )
})