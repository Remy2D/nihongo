import './TileGroup.css';
import {isKatakanaLoaded} from "./KanaLoad";
import {getKatakanaRomajiSet} from "./KanaModel";

function Question() {
    if (isKatakanaLoaded()) {

        if (hasEmptySeed()) {
            setRandomCharacterSeed();
        }

        return prepareDiv();
    }
}

function prepareDiv() {
    let character = localStorage.getItem(QUESTION_FIELD)
    return (
        <p className="Question">{character}</p>
    )
}

const QUESTION_FIELD = "currentQuestion"

export function setRandomCharacterSeed() {
    let romaji = getKatakanaRomajiSet();

    localStorage.setItem(QUESTION_FIELD, romaji[Math.floor((Math.random() * romaji.length))])
}

function hasEmptySeed() {
    return localStorage.getItem(QUESTION_FIELD) === null
}

export default Question;
