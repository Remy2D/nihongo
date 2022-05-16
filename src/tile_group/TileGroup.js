import './TileGroup.css';

import React from "react";
import Tile from "./Tile";
import {ROMAJI_TO_KANA} from "../common/Constants";
import {translateAllowedCharacters} from "../model/KatakanaModel";

function TileGroup(props) {
    let charsList

    if (props.isKatakana) {
        charsList = translateAllowedCharacters(props.charsListRomaji, ROMAJI_TO_KANA)
    } else {
        charsList = props.charsListRomaji
    }

    return (
        <React.StrictMode>
            <div className={props.className}>
                {
                    charsList.map(line => mapToButton(
                        line,
                        props.wrongAnswers,
                        props.solvedCallback,
                        props.errorCallback,
                        props.isKatakana
                    ))
                }
            </div>
        </React.StrictMode>
    );
}

function mapToButton(line, wrongAnswers, solvedCallback, errorCallback, isKatakana) {
    let isWrongAnswer = wrongAnswers.findIndex(e => e === line) >= 0
    return (
        <Tile kana={line} isWrongAnswer={isWrongAnswer}
              key={Math.random()} isKatakana={isKatakana}
              solvedCallback={solvedCallback}
              errorCallback={errorCallback}/>
    );
}


export default TileGroup;
