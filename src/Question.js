import './tile_group/TileGroup.css';
import {
    PREV_QUESTION_FIELD,
    QUESTION_FIELD,
    ROMAJI_TO_KANA
} from "./common/Constants";
import {romajiToKatakana} from "./model/KatakanaModel";


function Question(props) {
    if (hasEmptySeed() || noWrongAnswers(props)) {
        setRandomCharacterSeed(props.charsListRomaji);
    }

    return prepareDiv(props.direction);
}

function prepareDiv(direction) {
    let character = localStorage.getItem(QUESTION_FIELD)

    let question = character
    if (direction === ROMAJI_TO_KANA) {
        question = romajiToKatakana(character)
    }

    return (
        <div className="Question">{question ? question : " "}</div>
    )
}

export function setRandomCharacterSeed(charsList) {
    let prevQuestion = localStorage.getItem(PREV_QUESTION_FIELD)

    let filteredChars = charsList
    if (charsList.length > 1) {
        filteredChars = charsList.filter(e => e !== prevQuestion)
    }

    let draw = filteredChars[Math.floor((Math.random() * filteredChars.length))]

    localStorage.setItem(QUESTION_FIELD, draw ? draw : "-")
}

function hasEmptySeed() {
    return localStorage.getItem(QUESTION_FIELD) === null
}

function noWrongAnswers(props) {
    return props.wrongAnswers.length === 0
}

export default Question;
