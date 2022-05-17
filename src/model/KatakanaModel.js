import {
    KANA_TO_ROMAJI,
    KATAKANA_FIELD,
    HIRAGANA_FIELD,
    KATAKANA_PATH,
    HIRAGANA_PATH
} from "../common/Constants";

export function storeKatakana(text) {
    localStorage.setItem(KATAKANA_FIELD, text)
}

export function storeHiragana(text) {
    localStorage.setItem(HIRAGANA_FIELD, text)
}

export function getCurrentKanaRomajiSet() {
    return getCurrentKanaPairs().map(entry => entry[1])
}

function getCurrentKanaKanaSet() {
    return getCurrentKanaPairs().map(entry => entry[0])
}

export function kanaMatches(userKana, question, isKatakana) {
    if (isKatakana) {
        return doesKanaMatch(userKana, question, getCurrentKanaRomajiSet(), getCurrentKanaKanaSet())
    } else {
        return doesKanaMatch(userKana, question, getCurrentKanaKanaSet(), getCurrentKanaRomajiSet())
    }
}

export function doesKanaMatch(userKana, question, questionSet, userSet) {
    let index = questionSet.indexOf(question)
    let questionTranslate = userSet[index]

    return userKana === questionTranslate
}

export function romajiToKatakana(romaji) {
    let result = getCurrentKanaPairs()
        .filter(e => e[1] === romaji)
        .map(e => e[0])

    if (result.length === 1) {
        return result[0]
    }
    return null
}

export function translateAllowedCharacters(charsList, direction) {
    if (direction === KANA_TO_ROMAJI) {
        return getCurrentKanaPairs()
            .filter(e => charsList.includes(e[0]))
            .map(e => e[1])
    } else {
        return getCurrentKanaPairs()
            .filter(e => charsList.includes(e[1]))
            .map(e => e[0])
    }
}

function getCurrentKanaPairs() {
    let kanas
    kanas = getCurrentKana() === KATAKANA_FIELD ? getKatakana() : getHiragana()
    return kanas.map(e => e.split(","))
}

function getKatakana() {
    return getKana(KATAKANA_FIELD)
}

function getHiragana() {
    return getKana(HIRAGANA_FIELD)
}

export function hasKatakana() {
    return getKatakana() != null && getKatakana().length > 0
}

export function hasHiragana() {
    return getHiragana() != null && getHiragana().length > 0
}

function getKana(field) {
    let kanaText = localStorage.getItem(field)

    if (kanaText === null) {
        return []
    }

    return kanaText.split("\n")
}

export function getCurrentKana() {
    if (window.location.pathname === "/katakana") {
        return KATAKANA_PATH;
    }

    if (window.location.pathname === "/hiragana") {
        return HIRAGANA_PATH;
    }

    return null;
}