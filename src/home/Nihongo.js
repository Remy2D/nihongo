import React from "react";
import '../tile_group/TileGroup-mobile.css'
import {Outlet} from "react-router-dom";


function Nihongo() {
    return (
        <div className="Nihongo">
            <Outlet/>
        </div>
    );
}

export default Nihongo;