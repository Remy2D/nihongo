import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import './Sidebar.css';
import KanaCheckbox from "./KanaCheckbox";
import {getCurrentKanaRomajiSet} from "../model/KatakanaModel";

function Sidebar(props) {
    return renderSidebar(
        props.charsListRomaji,
        props.direction,
        props.editCallback,
        props.saveUserSetCallback,
        props.loadUserSetCallback
    );
}

function renderSidebar(selectedCharsList, direction, editCallback, saveUserSetCallback, loadUserSetCallback) {
    let chars = [...getCurrentKanaRomajiSet()];
    let columns = splitToColumns(chars, 3);

    return (
        <Menu>
            <table width="100%">
                <tbody>
                <tr>
                    <td width="50%">
                        <button className="AllButton"
                                onClick={() => {
                                    editCallback(getCurrentKanaRomajiSet())
                                }}>
                            All
                        </button>
                    </td>
                    <td width="50%">
                        <button className="NoneButton"
                                onClick={() => {
                                    editCallback([])
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
                <div>{columns[0].map(entry => mapToCheckbox(
                    entry, selectedCharsList, direction,
                    (checkbox) => {
                        handleChange(checkbox, selectedCharsList, direction, editCallback)
                    }))}
                </div>
                <div>{columns[1].map(entry => mapToCheckbox(
                    entry, selectedCharsList, direction,
                    (checkbox) => {
                        handleChange(checkbox, selectedCharsList, direction, editCallback)
                    }))}
                </div>
                <div>{columns[2].map(entry => mapToCheckbox(
                    entry, selectedCharsList, direction,
                    (checkbox) => {
                        handleChange(checkbox, selectedCharsList, direction, editCallback)
                    }))}
                </div>
            </div>
            <table width="100%">
                <tbody>
                <tr>
                    <td width="50%">
                        <button className="SaveUserSetButton"
                                onClick={() => {
                                    saveUserSetCallback()
                                }}>
                            Save
                        </button>
                    </td>
                    <td width="50%">
                        <button className="LoadUserSetButton"
                                onClick={() => {
                                    loadUserSetCallback()
                                }}>
                            Load
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </Menu>
    );
}

function handleChange(checkbox, charsListRomaji, direction, editCallback) {
    let checked = checkbox.props.checked;
    let romaji = checkbox.props.romaji;

    let filteredRomaji;
    if (!checked) {
        filteredRomaji = [...charsListRomaji, romaji];
    } else {
        let index = charsListRomaji.indexOf(romaji);
        if (index >= 0) {
            filteredRomaji = [...charsListRomaji];
            filteredRomaji.splice(index, 1);
        }
    }

    editCallback(filteredRomaji);
}

function splitToColumns(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    return result;
}

function mapToCheckbox(entry, selectedCharsList, direction, handleChange) {
    let isSelected = selectedCharsList.includes(entry)

    return (
        <div className="KanaCheckboxDiv" key={Math.random()}>
            <KanaCheckbox checked={isSelected} romaji={entry}
                          handleChange={(checkbox) => handleChange(checkbox)}/>
            <br/>
        </div>
    );
}


export default Sidebar;
