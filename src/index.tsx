import React from 'react'
import ReactDOM from 'react-dom'
import {HashRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import './index.css'
import {store} from './redux/store'
import {App} from './App'
import {Provider} from 'react-redux'

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>, document.getElementById('root'))

reportWebVitals()