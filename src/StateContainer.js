import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Reset from "./Reset";
import Question from "./Question";
import Counter, {resetCounter} from "./Counter";
import TileGroup from "./tile_group/TileGroup";
import KanaLoadModal from "./loader/Modal";
import TranslateDirectionButton from "./translate_direction/TranslateDirectionButton";
import {KANA_TO_ROMAJI, ROMAJI_TO_KANA} from './common/Constants'
import {getUserRomajiSetKatakana, storeUserRomajiSetKatakana} from "./model/SettingsModel";
import {BrowserView, MobileView} from 'react-device-detect';
import './tile_group/TileGroup-mobile.css'

class StateContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            charsListRomaji: props.charsListRomaji,
            wrongAnswers: [],
            direction: KANA_TO_ROMAJI
        };
    }

    editCallback(filteredRomaji) {
        this.setState({
            charsListRomaji: filteredRomaji
        });
    }

    successCallback() {
        this.setState({
            wrongAnswers: []
        });
    }

    errorCallback(wrongAnswer) {
        this.setState((prevState) => {
            let wrongAnswers = [...prevState.wrongAnswers, wrongAnswer]
            return {
                wrongAnswers: wrongAnswers
            }
        });
    }

    resetCallback() {
        resetCounter()
        this.setState({
            wrongAnswers: []
        });
    }

    saveUserSetCallback() {
        console.log("Saved user katakana list: " + this.state.charsListRomaji)
        storeUserRomajiSetKatakana(this.state.charsListRomaji);
    }

    loadUserSetCallback() {
        let xD = getUserRomajiSetKatakana();
        console.log("Load user katakana list: " + xD)
        this.setState({
            charsListRomaji: xD
        });
    }

    changeDirectionCallback() {
        this.setState((prevState) => {
            let lastDirection = prevState.direction

            if (lastDirection === KANA_TO_ROMAJI) {
                return {
                    wrongAnswers: [],
                    direction: ROMAJI_TO_KANA
                };
            } else {
                return {
                    wrongAnswers: [],
                    direction: KANA_TO_ROMAJI
                };
            }
        })
    }

    render() {
        return (
            <div className="StateContainer" id="outer-container">
                <BrowserView>
                    {getDesktopView(this)}
                </BrowserView>
                <MobileView>
                    {getMobileView(this)}
                </MobileView>
            </div>
        )
    }
}

function getMobileView(stateContainer) {
    return (
        <div>
            <header className="App-header-mobile" id="page-wrap">
                <br/>
                <table className="Header-table">
                    <tbody>
                    <tr>
                        <td>
                            {getSidebar(stateContainer)}
                        </td>
                        <td align="center" style={{verticalAlign: 'bottom'}}>
                            {getTranslateDirectionButton(stateContainer, true)}
                        </td>
                        <td align="center">
                            {getResetButton(stateContainer)}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className="Header-table">
                    <tbody>
                    <tr>
                        <td align="center" style={{verticalAlign: 'bottom'}}>
                        </td>
                        <td style={{verticalAlign: 'bottom'}}>
                            {getQuestion(stateContainer, "Question-mobile")}
                        </td>
                        <td style={{verticalAlign: 'bottom'}}>
                            {getCounter()}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                {getTileGroup(stateContainer, "TileGroup-mobile")}
            </header>

            <KanaLoadModal/>
        </div>
    );
}

function getDesktopView(stateContainer) {
    return (
        <div>
            <header className="App-header" id="page-wrap">
                {getSidebar(stateContainer)}
                <br/>
                <table className="Header-table">
                    <tbody>
                    <tr>
                        <td align="right" style={{verticalAlign: 'bottom'}}>
                            {getTranslateDirectionButton(stateContainer, false)}
                        </td>
                        <td>
                            <table className="Header-table">
                                <tbody>
                                <tr>
                                    <td align="center" style={{verticalAlign: 'bottom'}}>
                                        {getResetButton(stateContainer)}
                                    </td>
                                    <td style={{verticalAlign: 'bottom'}}>
                                        {getQuestion(stateContainer, "Question")}
                                    </td>
                                    <td style={{verticalAlign: 'bottom'}}>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </td>
                        <td style={{verticalAlign: 'bottom'}}>
                            {getCounter()}
                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                {getTileGroup(stateContainer, "TileGroup")}
            </header>

            <KanaLoadModal/>
        </div>
    );
}

function getCounter() {
    return (<Counter/>);
}

function getResetButton(stateContainer) {
    return (<Reset resetCallback={() => stateContainer.resetCallback()}/>);
}

function getQuestion(stateContainer, className) {
    return (<Question className={className}
                      direction={stateContainer.state.direction}
                      charsListRomaji={stateContainer.state.charsListRomaji}
                      wrongAnswers={stateContainer.state.wrongAnswers}
                      isKanaToRomaji={stateContainer.state.direction === KANA_TO_ROMAJI}/>
    );
}

function getTranslateDirectionButton(stateContainer, isMobile) {
    return (
        <TranslateDirectionButton
            isMobile={isMobile}
            isKanaToRomaji={stateContainer.state.direction === KANA_TO_ROMAJI}
            changeDirectionCallback={() => stateContainer.changeDirectionCallback()}/>
    );
}

function getSidebar(stateContainer) {
    return (<Sidebar editCallback={(filteredKana) => stateContainer.editCallback(filteredKana)}
                     loadUserSetCallback={() => stateContainer.loadUserSetCallback()}
                     saveUserSetCallback={() => stateContainer.saveUserSetCallback()}
                     charsListRomaji={stateContainer.state.charsListRomaji}
                     pageWrapId={'page-wrap'}
                     outerContainerId={'outer-container'}
                     direction={stateContainer.state.direction}/>
    );
}

function getTileGroup(stateContainer, className) {
    return (<TileGroup className={className}
                       charsListRomaji={stateContainer.state.charsListRomaji}
                       wrongAnswers={stateContainer.state.wrongAnswers}
                       solvedCallback={() => stateContainer.successCallback()}
                       errorCallback={(e) => stateContainer.errorCallback(e)}
                       isKatakana={stateContainer.state.direction === KANA_TO_ROMAJI}/>
    );
}


export default StateContainer;
