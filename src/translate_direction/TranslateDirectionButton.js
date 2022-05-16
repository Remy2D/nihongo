import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleRight, faCircleLeft} from '@fortawesome/free-regular-svg-icons'
import './TranslateDirectionButton.css'

function TranslateDirectionButton(props) {
    let icon = props.isKanaToRomaji ? faCircleRight : faCircleLeft

    let kanaSideText = props.isMobile ? "カ" : "片仮名"
    let romajiSideText = props.isMobile ? "KA" : "Romaji"

    return (
        <div>
            {kanaSideText}
            <button className="TranslateDirectionButton" onClick={props.changeDirectionCallback}>
                <FontAwesomeIcon className="TranslateDirectionButtonIcon" icon={icon}/>
            </button>
            {romajiSideText}
        </div>
    );
}


export default TranslateDirectionButton;