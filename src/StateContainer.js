import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Reset from "./ResetQuestion";
import Question from "./Question";
import Counter, {resetCounter} from "./Counter";
import TileGroup from "./tile_group/TileGroup";


class StateContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            charsList: props.charsList,
            wrongAnswers: []
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

    render() {
        return (
            <div className="StateContainer" id="outer-container">
                <header className="App-header" id="page-wrap">
                    <Sidebar editCallback={(filteredKana) => this.editCallback(filteredKana)}
                             pageWrapId={'page-wrap'}
                             outerContainerId={'outer-container'}/>
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
                                        <td align="center" style={{verticalAlign: 'bottom'}}>
                                            <Reset resetCallback={() => this.resetCallback()}/>
                                        </td>
                                        <td style={{verticalAlign: 'bottom'}}>
                                            <Question charsList={this.state.charsList}
                                                      wrongAnswers={this.state.wrongAnswers}/>
                                        </td>
                                        <td style={{verticalAlign: 'bottom'}}>
                                            <Counter/>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td/>
                        </tr>
                        </tbody>
                    </table>

                    <TileGroup charsList={this.state.charsList}
                               wrongAnswers={this.state.wrongAnswers}
                               solvedCallback={() => this.successCallback()}
                               errorCallback={(e) => this.errorCallback(e)}
                    />

                </header>
            </div>
        )
    }
}


export default StateContainer;
