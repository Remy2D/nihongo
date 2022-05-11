import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './TileGroup.css';
import Reset from "./ResetQuestion";
import Question from "./Question";
import Counter from "./Counter";
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
            <br/>
            <br/>
            <table className="Header-table">
                <tbody>
                <tr>
                    <td/>
                    <td>
                        <table className="Header-table">
                            <tbody>
                            <tr>
                                <td align="center" style={{verticalAlign: 'bottom'}}><Reset/></td>
                                <td style={{verticalAlign: 'bottom'}}><Question/></td>
                                <td style={{verticalAlign: 'bottom'}}><Counter/></td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                    <td/>
                </tr>
                </tbody>
            </table>

            <TileGroup/>
        </header>
    </React.StrictMode>
);

reportWebVitals();
