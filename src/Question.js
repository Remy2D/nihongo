import './TileGroup.css';
import {isKatakanaLoaded} from "./KanaLoad";
import {getKatakanaRomajiSet} from "./KanaModel";

function Question() {
    if (isKatakanaLoaded()) {
        return showRandomCharacter();
    }
}

function showRandomCharacter() {
    let romaji = getKatakanaRomajiSet();

    return (
        <p className="Question">{romaji[Math.floor((Math.random() * romaji.length))]}</p>
    )
}

export default Question;
