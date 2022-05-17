import React from "react";
import {isMobile} from 'react-device-detect';
import '../tile_group/TileGroup-mobile.css'
import '../tile_group/TileGroup.css'
import {Link} from "react-router-dom";
import './Home.css'


function Home() {
    return isMobile ? getMobileView() : getDesktopView()
}

function getMobileView() {
    return (
        <div className="App-header-mobile">
            <div style={{minHeight: '8vh'}}/>

            <table style={{tableLayout: 'fixed', width: '100%'}}>
                <tbody>
                <tr>
                    <td width="90%" height="90%">
                        <div style={{alignContent: 'center', textAlign: 'center'}}>
                            <img src="https://remy2d.com/nihongo-static/nihongo-home3.svg" alt=""/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div style={{textAlign: 'center'}}>
                            <div style={{minHeight: '1vh'}}/>

                            Nihongo!

                            <div style={{minHeight: '3vh'}}/>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>


            <nav>
                <table style={{tableLayout: 'fixed', width: '100%'}}>
                    <tbody>
                    <tr>
                        <td/>
                        <td style={{textAlign: 'right'}}>
                            <Link to="/hiragana">
                                <button className="KanaButton-mobile">ひ</button>
                            </Link>
                        </td>
                        <td/>
                        <td>
                            <Link to="/katakana">
                                <button className="KanaButton-mobile">カ</button>
                            </Link>
                        </td>
                        <td/>
                    </tr>
                    </tbody>
                </table>
            </nav>
        </div>
    );
}

function getDesktopView() {
    return (
        <div className="App-header" align="left" style={{verticalAlign: 'center'}}>
            <div style={{minHeight: '8vh'}}/>


            <table style={{tableLayout: 'fixed', width: '100%'}}>
                <tbody>
                <tr>
                    <td/>
                    <td>
                        <div style={{textAlign: 'center'}}>
                            <img src="https://remy2d.com/nihongo-static/nihongo-home3.svg" alt=""
                                 width="400vw" height="400vh"/>

                            <div style={{minHeight: '1vh'}}/>

                            Nihongo!

                            <div style={{minHeight: '3vh'}}/>
                        </div>
                    </td>
                    <td/>
                </tr>
                </tbody>
            </table>


            <nav>
                <table style={{tableLayout: 'fixed', width: '100%'}}>
                    <tbody>
                    <tr>
                        <td/>
                        <td/>
                        <td style={{textAlign: 'right'}}>
                            <Link to="/hiragana">
                                <button className="KanaButton">ひらがな</button>
                            </Link>
                        </td>
                        <td/>
                        <td>
                            <Link to="/katakana">
                                <button className="KanaButton">カタカナ</button>
                            </Link>
                        </td>
                        <td/>
                        <td/>
                    </tr>
                    </tbody>
                </table>
            </nav>
        </div>
    );
}

export default Home;