import React from 'react';
import ReactDOM from 'react-dom';
//引入App组件
import App from "./App";
import {BrowserRouter} from "react-router-dom";
//渲染App到页面
ReactDOM.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
  document.getElementById('root'));
