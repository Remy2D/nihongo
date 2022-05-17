import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tile_group/TileGroup.css';
import reportWebVitals from './reportWebVitals';
import {loadKatakana} from "./loader/Loader";
import {resetCounter} from "./Counter";
import App from "./home/App";

function onLoad() {
    loadKatakana(reload);
    resetCounter();
}

window.addEventListener('onload', onLoad())

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

function reload() {
    window.location.reload(false);
}

reportWebVitals();
