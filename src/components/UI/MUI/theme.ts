import {createTheme} from '@mui/material'

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
})

export const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#363636'
        }
    },
})