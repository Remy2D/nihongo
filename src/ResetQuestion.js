import Button from 'react-bootstrap/Button'
import './Reset.css';
import React from "react";

function Reset(props) {
    return (
        <Button className="Reset" variant="warning"
                onClick={() => {
                    props.resetCallback()
                }}>
            <img src="https://remy2d.com/nihongo-static/Refresh_icon.svg" alt="Reset"/>
        </Button>
    )
}

export default Reset;
