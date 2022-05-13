import Button from 'react-bootstrap/Button'
import {isKatakanaLoaded} from "./model/KanaLoader";
import {setRandomCharacterSeed} from "./Question";
import './Reset.css';
import React from "react";
import {resetCounter} from "./Counter";

function Reset() {
    return (
        <Button className="Reset" variant="warning"
                onClick={() => {
                    resetQuestion()
                    resetCounter()
                }}>
            <img src="https://remy2d.com/nihongo-static/Refresh_icon.svg" alt="Reset"/>
        </Button>
    )
}

export function resetQuestion() {
    // todo
    // clearKatakana()
    // loadKatakana()

    if (isKatakanaLoaded()) {
        setRandomCharacterSeed();
    }
    window.location.reload(false);
}

export default Reset;
