import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Reset from "./Reset";
import Question from "./Question";
import Counter, {resetCounter} from "./Counter";
import TileGroup from "./tile_group/TileGroup";
import KanaLoadModal from "./loader/Modal";
import TranslateDirectionButton from "./translate_direction/TranslateDirectionButton";
import {translateAllowedCharacters} from "./model/KatakanaModel";
import {KANA_TO_ROMAJI, ROMAJI_TO_KANA} from './common/Constants'


class StateContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            charsList: props.charsList,
            wrongAnswers: [],
            direction: KANA_TO_ROMAJI
        }
    }

    editCallback(filteredKana) {
        this.setState({
            charsList: filteredKana
        })
    }

    successCallback() {
        this.setState({
            wrongAnswers: []
        })
    }

    errorCallback(wrongAnswer) {
        this.setState((prevState) => {
            let wrongAnswers = [...prevState.wrongAnswers, wrongAnswer]
            return {
                wrongAnswers: wrongAnswers
            }
        })
    }

    resetCallback() {
        resetCounter()
        this.setState({
            wrongAnswers: []
        })
    }

    changeDirectionCallback() {
        this.setState((prevState) => {
            let lastDirection = prevState.direction

            if (lastDirection === KANA_TO_ROMAJI) {
                return {
                    wrongAnswers: [],
                    charsList: translateAllowedCharacters(prevState.charsList, KANA_TO_ROMAJI),
                    direction: ROMAJI_TO_KANA
                }
            } else {
                return {
                    wrongAnswers: [],
                    charsList: translateAllowedCharacters(prevState.charsList, ROMAJI_TO_KANA),
                    direction: KANA_TO_ROMAJI
                }
            }
        })
    }

    render() {
        return (
            <div className="StateContainer" id="outer-container">
                <header className="App-header" id="page-wrap">
                    <Sidebar editCallback={(filteredKana) => this.editCallback(filteredKana)}
                             pageWrapId={'page-wrap'}
                             outerContainerId={'outer-container'}
                             direction={this.state.direction}/>
                    <br/>
                    <br/>
                    <table className="Header-table">
                        <tbody>
                        <tr>
                            <td align="right" style={{verticalAlign: 'bottom'}}>
                                <TranslateDirectionButton
                                    isKanaToRomaji={this.state.direction === KANA_TO_ROMAJI}
                                    changeDirectionCallback={() => this.changeDirectionCallback()}/>
                            </td>
                            <td>
                                <table className="Header-table">
                                    <tbody>
                                    <tr>
                                        <td align="center" style={{verticalAlign: 'bottom'}}>
                                            <Reset resetCallback={() => this.resetCallback()}/>
                                        </td>
                                        <td style={{verticalAlign: 'bottom'}}>
                                            <Question direction={this.state.direction}
                                                      charsList={this.state.charsList}
                                                      wrongAnswers={this.state.wrongAnswers}
                                                      isKanaToRomaji={this.state.direction === KANA_TO_ROMAJI}
                                            />
                                        </td>
                                        <td style={{verticalAlign: 'bottom'}}>

                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td style={{verticalAlign: 'bottom'}}>
                                <Counter/>
                            </td>
                        </tr>
                        </tbody>
                    </table>

                    <TileGroup charsList={this.state.charsList}
                               wrongAnswers={this.state.wrongAnswers}
                               solvedCallback={() => this.successCallback()}
                               errorCallback={(e) => this.errorCallback(e)}
                               isKatakana={this.state.direction === KANA_TO_ROMAJI}
                    />
                </header>

                <KanaLoadModal/>
            </div>
        )
    }
}


export default StateContainer;
