import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import './index.css'
import {store} from './redux/store'
import {App} from './app/App'
import {Provider} from 'react-redux'
import {defaultTheme} from './components/UI/MUI/theme'
import {ThemeProvider} from '@mui/material'

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <ThemeProvider theme={defaultTheme}>
                    <App/>
                </ThemeProvider>
            </Provider>
        </HashRouter>
    </React.StrictMode>, document.getElementById('root'))

// @ts-ignore
window.store = store