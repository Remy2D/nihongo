import './TileGroup.css';

import React from "react";
import Tile from "./Tile";

function TileGroup(props) {
    return (
        <React.StrictMode>
            <div className="TileGroup">
                {
                    props.charsList.map(line => mapToButton(line, props.solvedCallback))
                }
            </div>
        </React.StrictMode>
    );
}

function mapToButton(line, solvedCallback) {
    return (
        <Tile isError={false} kana={line}
              key={Math.random()}
              solvedCallback={solvedCallback}/>
    );
}


export default TileGroup;
