import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function ModalComponent({ show, handleClose, result, next }) {
    return (
<Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>결과</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <pre style={{ whiteSpace: 'pre-wrap' }}>{result}</pre>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>다시 풀기</Button>
                <Link to = {next}>
                    <Button variant="primary">다음 문제로 이동하기</Button>
                </Link>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalComponent;