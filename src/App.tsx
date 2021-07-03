import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
}

export function App(props: AppPropsType) {
    return (
        <div className={'App'}>
            <Header headerData={props.state.header}/>
            <Content
                contentData = {props.state.content}
            />
        </div>
    )
}