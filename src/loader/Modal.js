import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Modal.css";
import {isKatakanaLoaded} from "./Loader";
import {Spinner} from "react-bootstrap";

function KanaLoadModal() {
    return (
        <Modal
            className="KanaLoadModal"
            show={!isKatakanaLoaded()}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className="KanaLoadModalBody">
                <div className="KanaLoadModalBodyText">
                    <div> Loading katakana</div>
                    <Spinner animation="grow" role="status"/>
                </div>
            </Modal.Body>
        </Modal>
    );
}

export default KanaLoadModal;