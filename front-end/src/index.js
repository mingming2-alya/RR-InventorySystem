import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import App from './App';
import Home from './Home';
import HomeSearch from './HomeSearch';
import HomeInventory from './HomeInventory';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>}/>
            <Route exact path="/Home" element={<Home/>}/>
            <Route exact path="/HomeSearch" element={<HomeSearch/>}/>
            <Route exact path="/HomeInventory" element={<HomeInventory/>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
