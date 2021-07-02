import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from "./App";
import reportWebVitals from './reportWebVitals';

// Header data
export const dataForHeader: dataForHeaderType = {
    href: '/profile',
    src: 'https://sun9-5.userapi.com/impf/c836635/v836635330/314ed/9md97EBkSPg.jpg?size=600x600&quality=96&sign=302798ae13b76abf476b1e71420b702f&type=album',
    alt: 'Mini profile'
}

type dataForHeaderType = {
    href: string
    src: string
    alt: string
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();