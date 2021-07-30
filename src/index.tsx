import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import reportWebVitals from './reportWebVitals'
import './index.css';
import {store} from "./redux/redux-store";
import {App} from "./App";

let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <HashRouter>
                <App store={store}/>
            </HashRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(rerenderEntireTree)
reportWebVitals()

{/*state={store.getState()}*/}