import {clearWrongAnswers} from "./WrongAnswers";
import Button from 'react-bootstrap/Button'
import {isKatakanaLoaded} from "./KanaLoad";
import {setRandomCharacterSeed} from "./Question";
import './Reset.css';
import React from "react";

function Reset() {
    return (
        <Button className="Reset" variant="warning"
                onClick={() => {
                    reset()
                }}>
            <img src="http://localhost:8069/Refresh_icon.svg" alt="Reset"/>
        </Button>
    )
}

export function reset() {
    // todo
    // clearKatakana()
    // loadKatakana()

    if (isKatakanaLoaded()) {
        clearWrongAnswers();
        setRandomCharacterSeed();
    }
    window.location.reload(false);
}

export default Reset;
