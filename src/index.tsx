import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals'
import './index.css';
import {store} from "./redux/state";
import {App} from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App state={store._getState()} dispatch={store.dispatch.bind(store)}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store._subscribe(rerenderEntireTree)
reportWebVitals()