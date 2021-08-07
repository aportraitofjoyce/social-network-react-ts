import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals'
import './index.css';
import {store} from "./redux/store";
import {App} from "./App";
import {Provider} from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>
    </React.StrictMode>, document.getElementById('root'))

// Подписываем рендер App на изменение store
// store.subscribe(rerenderEntireTree)

reportWebVitals()