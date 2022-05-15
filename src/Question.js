import './tile_group/TileGroup.css';
import {
    katakanaToRomaji,
    romajiToKatakana,
    translateAllowedCharacters
} from "./model/KatakanaModel";
import {PREV_QUESTION_FIELD, QUESTION_FIELD} from "./common/Constants";


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

export function setRandomCharacterSeed(charsList, direction) {
    let prevQuestion = localStorage.getItem(PREV_QUESTION_FIELD)

    let allowedCharacters = translateAllowedCharacters(charsList, direction)

    if (allowedCharacters.length > 1) {
        allowedCharacters = allowedCharacters.filter(e => e !== prevQuestion)
    }

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
