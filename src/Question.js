import './tile_group/TileGroup.css';
import {getKatakanaPairs, romajiToKatakana} from "./model/KatakanaModel";

function Question(props) {
    if (hasEmptySeed() || noWrongAnswers(props) || seedNotInList(props.charsList)) {
        setRandomCharacterSeed(props.charsList);
    }

    return prepareDiv();
}

function prepareDiv() {
    let character = localStorage.getItem(QUESTION_FIELD)
    return (
        <div className="Question">{character ? character : " "}</div>
    )
}

const QUESTION_FIELD = "currentQuestion"

export function setRandomCharacterSeed(charsList) {
    let allowedRomaji = getKatakanaPairs()
        .filter(e => charsList.includes(e[0]))
        .map(e => e[1])

    let draw = allowedRomaji[Math.floor((Math.random() * allowedRomaji.length))]

    localStorage.setItem(QUESTION_FIELD, draw ? draw : "-")
}

function hasEmptySeed() {
    return localStorage.getItem(QUESTION_FIELD) === null
}

function noWrongAnswers(props) {
    return props.wrongAnswers.length === 0
}

function seedNotInList(charsList) {
    let romaji = localStorage.getItem(QUESTION_FIELD)
    let kana = romajiToKatakana(romaji)

    return !charsList.includes(kana)
}

export default Question;
