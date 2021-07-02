import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {BrowserRouter, Route} from "react-router-dom";


export function App() {
    return (
            <div className={'App'}>
                <Header/>
                <Content/>
            </div>
    )
}