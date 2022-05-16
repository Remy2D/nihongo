import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Reset from "./Reset";
import Question from "./Question";
import Counter, {resetCounter} from "./Counter";
import TileGroup from "./tile_group/TileGroup";
import KanaLoadModal from "./loader/Modal";
import TranslateDirectionButton from "./translate_direction/TranslateDirectionButton";
import {KANA_TO_ROMAJI, ROMAJI_TO_KANA} from './common/Constants'


class StateContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            charsListRomaji: props.charsListRomaji,
            wrongAnswers: [],
            direction: KANA_TO_ROMAJI
        }
    }

    editCallback(filteredRomaji) {
        this.setState({
            charsListRomaji: filteredRomaji
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
                    direction: ROMAJI_TO_KANA
                }
            } else {
                return {
                    wrongAnswers: [],
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
                             charsListRomaji={this.state.charsListRomaji}
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
                                                      charsListRomaji={this.state.charsListRomaji}
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

                    <TileGroup charsListRomaji={this.state.charsListRomaji}
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
