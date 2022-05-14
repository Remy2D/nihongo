import './TileGroup.css';

import React from "react";
import Tile from "./Tile";

function TileGroup(props) {
    return (
        <React.StrictMode>
            <div className="TileGroup">
                {
                    props.charsList.map(line => mapToButton(
                        line, props.wrongAnswers, props.solvedCallback, props.errorCallback
                    ))
                }
            </div>
        </React.StrictMode>
    );
}

function mapToButton(line, wrongAnswers, solvedCallback, errorCallback) {
    let isWrongAnswer = wrongAnswers.findIndex(e => e === line) >= 0
    return (
        <Tile kana={line} isWrongAnswer={isWrongAnswer}
              key={Math.random()}
              solvedCallback={solvedCallback}
              errorCallback={errorCallback}/>
    );
}


export default TileGroup;
