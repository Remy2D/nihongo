import {clearWrongAnswers} from "./WrongAnswers";
import Button from 'react-bootstrap/Button'
import {isKatakanaLoaded} from "./KanaLoad";
import {setRandomCharacterSeed} from "./Question";

function Reset() {
    return (
        <Button variant="warning"
                onClick={() => {
                    reset()
                }}>
            Reset
        </Button>
    )
}

export function reset() {
    if (isKatakanaLoaded()) {
        clearWrongAnswers();
        setRandomCharacterSeed();
    }
    window.location.reload(false);
}

export default Reset;
