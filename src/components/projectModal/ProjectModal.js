import React from 'react';
import { Modal,  Button } from 'react-bootstrap';
import './ProjectModal.css'

export default function ProjectModal(props) {

    return(

        <Modal
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            // centered
            {...props}
            dialogClassName="project-modal"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    {/*{props.title}*/}
                    MODAL TITLE
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    {/*{props.body}*/}
                    HEre's a load of info
                </p>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Body>
        </Modal>
    )
}