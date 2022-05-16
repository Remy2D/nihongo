import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tile_group/TileGroup.css';
import reportWebVitals from './reportWebVitals';
import {loadKatakana} from "./loader/Loader";
import StateContainer from "./StateContainer";
import {getKatakanaRomajiSet} from "./model/KatakanaModel";
import {resetCounter} from "./Counter";

function onLoad() {
    loadKatakana(reload);
    resetCounter();
}

window.addEventListener('onload', onLoad())

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <StateContainer charsListRomaji={getKatakanaRomajiSet()}/>
    </React.StrictMode>
);

function reload() {
    window.location.reload(false);
}

reportWebVitals();
