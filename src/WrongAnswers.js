const KEY = "wrongAnswers"
const SEPARATOR = ","

export function clearWrongAnswers() {
    console.log("Clear wrong answers")
    localStorage.removeItem("wrongAnswers")
}

export function addWrongAnswer(newAnswer) {
    if (hasWrongAnswers()) {
        let currentAnswers = getWrongAnswers()
        let entry = currentAnswers + SEPARATOR + newAnswer
        console.log("Appending new wrong answer (" + newAnswer + "): " + entry)
        localStorage.setItem(KEY, entry)
    } else {
        console.log("Adding new wrong answer")
        localStorage.setItem(KEY, newAnswer)
    }
}

export function isWrongAnswer(kana) {
    return getWrongAnswers().findIndex(e => e === kana) !== -1
}

export function getWrongAnswers() {
    let answers = localStorage.getItem(KEY)
    return answers ? answers.split(SEPARATOR) : []
}

function hasWrongAnswers() {
    return getWrongAnswers().length > 0
}
