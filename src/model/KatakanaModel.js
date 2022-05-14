const KATAKANA_FIELD = "katakana"

export function storeKatakana(text) {
    localStorage.setItem(KATAKANA_FIELD, text)
}

export function clearKatakana() {
    localStorage.removeItem(KATAKANA_FIELD)
}

export function getKatakanaKanaSet() {
    let pairs = getKatakana()

    return pairs.map(entry => entry.split(",")[0])
}

export function getKatakanaRomajiSet() {
    let pairs = getKatakana()

    return pairs.map(entry => entry.split(",")[1])

}

export function kanaMatches(userKana, romaji) {
    let index = getKatakanaRomajiSet().indexOf(romaji)
    let questionKana = getKatakanaKanaSet()[index]

    return userKana === questionKana
}

export function getKatakanaPairs() {
    return getKatakana().map(e => e.split(","))
}

export function katakanaToRomaji(katakana) {
    let result = getKatakanaPairs()
        .filter(e => e[0] === katakana)
        .map(e => e[1])

    if (result.length === 1) {
        return result[0]
    }
    return null
}

export function romajiToKatakana(romaji) {
    let result = getKatakanaPairs()
        .filter(e => e[1] === romaji)
        .map(e => e[0])

    if (result.length === 1) {
        return result[0]
    }
    return null
}

function getKatakana() {
    let kanaText = localStorage.getItem(KATAKANA_FIELD)

    if (kanaText === null) {
        return []
    }

    return kanaText.split("\n")
}
