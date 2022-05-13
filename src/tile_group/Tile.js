import './TileGroup.css';
import styled from "styled-components";

import React from "react";
import {resetQuestion} from "../ResetQuestion";
import {kanaMatches} from "../model/KanaModel.js";
import {incrementCounter, resetCounter} from "../Counter.js";

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
            isError: props.isError,
            kana: props.kana
        };
    }

    markAsError = () => {
        this.setState({isError: true})
    }

    render() {
        let themeName = this.state.isError ? "pink" : "blue"
        let kana = this.state.kana
        return (
            <Button className="Tile" theme={themeName} onClick={e => clickMe(this)} value={kana}
                    key={kana}>{kana}</Button>
        );
    }
}

function clickMe(button) {
    let kana = button.state.kana
    let romaji = document.getElementsByClassName('Question')[0].textContent

    if (kanaMatches(kana, romaji)) {
        console.log("Match!: " + kana + "=" + romaji)
        resetQuestion();
        incrementCounter();
    } else {
        console.log("Wrong: " + kana + " != " + romaji)
        button.markAsError();
        resetCounter();
    }
}


export default Tile;
