import './TileGroup.css';
import styled from "styled-components";

import React from "react";
import * as KanaModel from './KanaModel.js'
import {resetQuestion} from "./ResetQuestion";
import {isKatakanaLoaded} from "./KanaLoad";
import {kanaMatches} from "./KanaModel.js";
import {addWrongAnswer, isWrongAnswer} from "./WrongAnswers.js";
import {incrementCounter, resetCounter} from "./Counter.js";

const theme = {
    blue: {
        default: "#3f51b5",
        hover: "#283593"
    },
    pink: {
        default: "#e91e63",
        hover: "#ad1457"
    }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 2vh 2vh;
  border-radius: 8px;
  outline: 0;
  text-transform: uppercase;
  margin: 5px 5px;
  cursor: pointer;
  font-size: calc(10px + 2vmin);
  box-shadow: 0px 1px 1px darkgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function TileGroup() {
    if (isKatakanaLoaded()) {
        return refreshButtons();
    }

}

function refreshButtons() {
    let chars = KanaModel.getKatakanaKanaSet()

    if (chars == null) {
        return (
            <div className="TileGroup">
            </div>
        )
    }

    return (
        <React.StrictMode>
            <div className="TileGroup">
                {
                    chars.map(mapToButton)
                }
            </div>
        </React.StrictMode>
    );
}

function mapToButton(line) {
    let themeName = isWrongAnswer(line) ? "pink" : "blue"

    return (
        <Button theme={themeName} onClick={e => clickMe(e)} value={line} key={line}>{line}</Button>
    );
}

function clickMe(button) {
    let kana = button.target.value
    let romaji = document.getElementsByClassName('Question')[0].textContent

    if (kanaMatches(kana, romaji)) {
        console.log("Match!: " + kana + "=" + romaji)
        resetQuestion();
        incrementCounter();
    } else {
        resetCounter();
        addWrongAnswer(kana)
        console.log("Wrong: " + kana + " != " + romaji)
    }

    window.location.reload(false);
}


export default TileGroup;
