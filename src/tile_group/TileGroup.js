import './TileGroup.css';

import React from "react";
import Tile from "./Tile";

function TileGroup(props) {
    return (
        <React.StrictMode>
            <div className="TileGroup">
                {
                    props.charsList.map(mapToButton)
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
