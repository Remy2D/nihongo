import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css';
import KanaCheckbox from "./KanaCheckbox";
import * as KanaModel from "../KanaModel";


class Sidebar extends React.Component {

    constructor(props) {
        super(props);

        this.handleChangeBind = this.handleChange.bind(this)

        this.state = {
            charsList: this.getBaseKanaSet(true),
        };
    }

    getBaseKanaSet(isEnabled) {
        return KanaModel.getKatakanaRomajiSet().map(romaji =>
            [romaji, isEnabled]
        )
    }

    handleChange(romaji) {
        let prevChars = [...this.state.charsList]
        let index = prevChars.findIndex(entry => entry[0] === romaji)
        prevChars[index][1] = !prevChars[index][1]

        this.setState({charsList: prevChars})
    }

    render() {
        let chars = [...this.state.charsList]
        let columns = splitToColumns(chars, 3)

        return (
            <Menu>
                <table width="100%">
                    <tbody>
                    <tr>
                        <td width="50%">
                            <button className="AllButton"
                                    onClick={() => {
                                        this.setState({charsList: this.getBaseKanaSet(true)})
                                    }}>
                                All
                            </button>
                        </td>
                        <td width="50%">
                            <button className="NoneButton"
                                    onClick={() => {
                                        this.setState({charsList: this.getBaseKanaSet(false)})
                                    }}>
                                None
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gridGap: 1
                }}>
                    <div>{columns[0].map(entry => mapToCheckbox(entry, this.handleChangeBind))}</div>
                    <div>{columns[1].map(entry => mapToCheckbox(entry, this.handleChangeBind))}</div>
                    <div>{columns[2].map(entry => mapToCheckbox(entry, this.handleChangeBind))}</div>
                </div>
            </Menu>
        );
    }
}

function splitToColumns(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}

function mapToCheckbox(entry, handleChangeBind) {
    return (
        <div className="KanaCheckboxDiv" key={Math.random()}>
            <KanaCheckbox checked={entry[1]} kana={entry[0]} handleChange={handleChangeBind}/>
            <br/>
        </div>
    );
}


export default Sidebar;
