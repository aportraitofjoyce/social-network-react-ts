import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Content/Content";
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addPost: (postText: string) => void
}

export function App(props: AppPropsType) {
    return (
        <div className={'App'}>
            <Header headerData={props.state.header}/>
            <Content
                contentData={props.state.content}
                addPost={props.addPost}
            />
        </div>
    )
}