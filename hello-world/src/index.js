//此為入口檔案

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//主component，function App()
import App from './App';
import reportWebVitals from './reportWebVitals';

//建構root Dom
const root = ReactDOM.createRoot(document.getElementById('root'));

//用引入的App渲染dom
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
