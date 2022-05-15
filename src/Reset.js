import Button from 'react-bootstrap/Button'
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faRepeat} from '@fortawesome/free-solid-svg-icons'
import './Reset.css';

function Reset(props) {
    return (
        <Button className="Reset" variant="warning"
                onClick={() => {
                    props.resetCallback()
                }}>
            <FontAwesomeIcon className="ResetButtonIcon" icon={faRepeat}/>
        </Button>
    )
}

export default Reset;
