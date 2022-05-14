import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tile_group/TileGroup.css';
import reportWebVitals from './reportWebVitals';
import {loadKatakana} from "./loader/Loader";
import StateContainer from "./StateContainer";
import {getKatakanaKanaSet} from "./model/KatakanaModel";

function onLoad() {
    loadKatakana(reload);
}

window.addEventListener('onload', onLoad())

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <StateContainer charsList={getKatakanaKanaSet()}/>
    </React.StrictMode>
);

function reload() {
    window.location.reload(false);
}

reportWebVitals();
