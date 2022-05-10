import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Reset from "./Reset";
import Question from "./Question";
import TileGroup from './TileGroup';
import reportWebVitals from './reportWebVitals';
import {loadKatakana} from "./KanaLoad";

function onLoad() {
    loadKatakana();
}

window.addEventListener('onload', onLoad())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <header className="App-header">
            <table>
                <tbody>
                <tr>
                    <td><Reset/></td>
                    <td><Question/></td>
                </tr>
                </tbody>
            </table>
            <TileGroup/>
        </header>
    </React.StrictMode>
);

reportWebVitals();
