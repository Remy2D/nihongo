import Button from 'react-bootstrap/Button'
import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import './BackButton.css';
import {Link} from "react-router-dom";

function BackButton() {
    return (
        <Button className="BackButton" variant="warning">
            <Link to="/nihongo">
                <FontAwesomeIcon className="BackButtonIcon" icon={faArrowLeft}/>
            </Link>
        </Button>
    )
}

export default BackButton;
