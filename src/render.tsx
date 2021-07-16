import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import {addPost, sendMessage, StateType, updateMessageText, updatePostText} from "./redux/state";

export const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                addPost={addPost}
                updatePostText={updatePostText}
                sendMessage={sendMessage}
                updateMessageText={updateMessageText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}