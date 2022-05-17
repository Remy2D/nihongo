import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../tile_group/TileGroup-mobile.css'
import Nihongo from "./Nihongo";
import StateContainer from "../StateContainer";
import {getCurrentKanaRomajiSet} from "../model/KatakanaModel";
import Home from "./Home";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/nihongo" element={<Nihongo/>}>
                    <Route index element={<Home/>}/>

                    <Route path="/nihongo/katakana"
                           element={<StateContainer charsListRomaji={getCurrentKanaRomajiSet()}/>}
                    />
                    <Route path="/nihongo/hiragana"
                           element={<StateContainer charsListRomaji={getCurrentKanaRomajiSet()}/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;