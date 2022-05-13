import './TileGroup.css';

import React from "react";
import * as KanaModel from '../KanaModel.js'
import {isKatakanaLoaded} from "../KanaLoad";
import Tile from "./Tile";

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
    return (
        <Tile isError={false} kana={line} key={Math.random()}/>
    );
}


export default TileGroup;
