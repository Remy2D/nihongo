import './tile_group/TileGroup.css';
import {
    katakanaToRomaji,
    romajiToKatakana,
    translateAllowedCharacters
} from "./model/KatakanaModel";

function Question(props) {
    if (hasEmptySeed() || noWrongAnswers(props) || seedNotInList(props.charsList, props.isKanaToRomaji)) {
        setRandomCharacterSeed(props.charsList, props.direction);
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

export function setRandomCharacterSeed(charsList, direction) {
    let allowedCharacters = translateAllowedCharacters(charsList, direction)

    let draw = allowedCharacters[Math.floor((Math.random() * allowedCharacters.length))]

    localStorage.setItem(QUESTION_FIELD, draw ? draw : "-")
}

function hasEmptySeed() {
    return localStorage.getItem(QUESTION_FIELD) === null
}

function noWrongAnswers(props) {
    return props.wrongAnswers.length === 0
}

function seedNotInList(charsList, isKanaToRomaji) {
    let question = localStorage.getItem(QUESTION_FIELD)
    if (isKanaToRomaji) {
        let translatedCharacter = romajiToKatakana(question)
        return !charsList.includes(translatedCharacter)
    } else {
        let translatedCharacter = katakanaToRomaji(question)
        return !charsList.includes(translatedCharacter)
    }
}

export default Question;
