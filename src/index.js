import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Question from "./Question";
import TileGroup from './TileGroup';
import reportWebVitals from './reportWebVitals';
import {loadKatakana} from "./KanaLoad";

window.addEventListener('onload', loadKatakana())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <header className="App-header">
            <Question/>
            <TileGroup/>
        </header>
    </React.StrictMode>
);

reportWebVitals();
