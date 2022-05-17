import Button from 'react-bootstrap/Button'
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRepeat} from '@fortawesome/free-solid-svg-icons'
import './ResetButton.css';

function ResetButton(props) {
    return (
        <Button className="ResetButton" variant="warning"
                onClick={() => {
                    props.resetCallback()
                }}>
            <FontAwesomeIcon className="ResetButtonIcon" icon={faRepeat}/>
        </Button>
    )
}

export default ResetButton;
