import './TileGroup.css';
import styled from "styled-components";

import React from "react";
import {kanaMatches} from "../model/KatakanaModel.js";
import {incrementCounter, resetCounter} from "../Counter.js";
import {PREV_QUESTION_FIELD, QUESTION_FIELD} from "../common/Constants";

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

class Tile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isKatakana: props.isKatakana,
            isError: props.isWrongAnswer,
            character: props.kana,
            solvedCallback: props.solvedCallback,
            errorCallback: props.errorCallback
        };
    }

    render() {
        let themeName = this.state.isError ? "pink" : "blue"
        let character = this.state.character
        return (
            <Button className="Tile" theme={themeName} onClick={e => clickMe(this)}
                    value={character} key={character}>{character}</Button>
        );
    }
}

function clickMe(button) {
    let character = button.state.character
    let question = document.getElementsByClassName('Question')[0].textContent

    if (kanaMatches(character, question, button.state.isKatakana)) {
        console.log("Match!: " + character + "=" + question)
        incrementCounter();
        localStorage.setItem(PREV_QUESTION_FIELD, localStorage.getItem(QUESTION_FIELD))
        button.state.solvedCallback();
    } else {
        console.log("Wrong: " + character + " != " + question)
        resetCounter();
        button.state.errorCallback(character);
    }
}


export default Tile;
