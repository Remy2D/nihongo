import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleRight, faCircleLeft} from '@fortawesome/free-regular-svg-icons'
import './TranslateDirectionButton.css'

function TranslateDirectionButton(props) {
    let icon = props.isKanaToRomaji ? faCircleRight : faCircleLeft

    return (
        <div>
            片仮名
            <button className="TranslateDirectionButton" onClick={props.changeDirectionCallback}>
                <FontAwesomeIcon className="TranslateDirectionButtonIcon" icon={icon}/>
            </button>
            Romaji
        </div>
    );
}


export default TranslateDirectionButton;