import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import {Spinner} from "react-bootstrap";
import * as KanaModel from "../model/KatakanaModel";

function KanaLoadModal() {
    return (
        <Modal
            className="KanaLoadModal"
            show={!KanaModel.hasHiragana() || !KanaModel.hasKatakana()}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="KanaLoadModalBody">
                <div className="KanaLoadModalBodyText">
                    <div>Loading alphabets</div>
                    <Spinner animation="grow" role="status"/>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default KanaLoadModal;