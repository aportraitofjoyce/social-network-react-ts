import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals'
import './index.css';
import {App} from "./App";
import {BrowserRouter, HashRouter} from "react-router-dom";
import {store} from "./redux/state";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App
                    state={store.getState()}
                    dispatch={store.dispatch.bind(store)}
                />
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()

store.subscribe(rerenderEntireTree)

reportWebVitals()