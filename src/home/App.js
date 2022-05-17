import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import '../tile_group/TileGroup-mobile.css'
import Nihongo from "./Nihongo";
import StateContainer from "../StateContainer";
import {getKatakanaRomajiSet} from "../model/KatakanaModel";
import Home from "./Home";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nihongo/>}>
                    <Route index element={<Home/>}/>

                    <Route path="/katakana"
                           element={<StateContainer charsListRomaji={getKatakanaRomajiSet()}/>}
                    />
                    <Route path="/hiragana"
                           element={<StateContainer charsListRomaji={getKatakanaRomajiSet()}/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;