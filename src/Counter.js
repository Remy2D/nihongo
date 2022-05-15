const COUNTER_FIELD = "currentCounter"

function Counter() {
    return prepareDiv();
}

function prepareDiv() {
    let counter = localStorage.getItem(COUNTER_FIELD)
    let desc = "Seria: ".concat(counter ? counter : "0")
    return (
        <div className="Counter">{desc}</div>
    )
}

export function incrementCounter() {
    let counter = parseInt(localStorage.getItem(COUNTER_FIELD), 10)
    let newCounter = (++counter).toString(10)
    localStorage.setItem(COUNTER_FIELD, newCounter)
}

export function resetCounter() {
    localStorage.setItem(COUNTER_FIELD, "0")
}

export default Counter;
