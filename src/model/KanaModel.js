export function storeKatakana(text) {
    localStorage.setItem("katakana", text)
}

export function clearKatakana() {
    localStorage.removeItem("katakana")
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

function getKatakana() {
    let kanaText = localStorage.getItem("katakana")

    if (kanaText === null) {
        return []
    }

    return kanaText.split("\n")
}
