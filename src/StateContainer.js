import React from "react";
import Sidebar from "./sidebar/Sidebar";
import Reset from "./ResetQuestion";
import Question from "./Question";
import Counter from "./Counter";
import TileGroup from "./tile_group/TileGroup";


class StateContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            charsList: props.charsList
        }
    }

    editCallback(filteredKana) {
        this.setState({
            charsList: filteredKana
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
                                            <Reset/>
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

                    <TileGroup charsList={this.state.charsList}/>

                </header>
            </div>
        )
    }
}


export default StateContainer;
