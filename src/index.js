import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './tile_group/TileGroup.css';
import Reset from "./ResetQuestion";
import Question from "./Question";
import Counter from "./Counter";
import TileGroup from './tile_group/TileGroup';
import Sidebar from "./sidebar/Sidebar";
import reportWebVitals from './reportWebVitals';
import {loadKatakana} from "./KanaLoad";

function onLoad() {
    loadKatakana();
}

window.addEventListener('onload', onLoad())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <div id="outer-container">
            <header className="App-header" id="page-wrap">
                <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
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
                                    <td align="center" style={{verticalAlign: 'bottom'}}><Reset/>
                                    </td>
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
        </div>
    </React.StrictMode>
);

reportWebVitals();
