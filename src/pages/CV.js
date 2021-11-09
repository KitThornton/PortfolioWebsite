import React, {useState} from 'react'
import { Document, Page } from 'react-pdf/dist/umd/entry.webpack';
import {Button, Container, Row, Col, Tooltip, OverlayTrigger} from "react-bootstrap";
import {RiFileDownloadLine} from 'react-icons/all';
import {Link} from "react-router-dom";
import file from '../cv_142.pdf'
import './CV.css';

export default function CV() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    function changePage(offset) {
        setPageNumber(prevPageNumber => prevPageNumber + offset);
    }

    function previousPage() {
        changePage(-1);
    }

    function nextPage() {
        changePage(1);
    }

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Download CV
        </Tooltip>
    );

    return (
        <Container fluid className="CV d-none d-md-inline-block">
            <Row>
                <Col>
                    Page {pageNumber} of {numPages}
                </Col>
                <Col className="icon">
                    <OverlayTrigger
                        placement="right"
                        delay={{ show: 100, hide: 400 }}
                        overlay={renderTooltip}
                    >
                      <Link to={file} target="_blank" download>
                          <RiFileDownloadLine />
                      </Link>
                    </OverlayTrigger>
                </Col>
                <Col>
                    <Button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        variant="secondary"
                        className="btn-page"
                    >
                        Previous
                    </Button>

                    <Button
                        type="button"
                        variant="secondary"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                        className="btn-page"
                    >
                        Next
                    </Button>
                </Col>
            </Row>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                className="CV opacity-100"
            >
                <Page pageNumber={pageNumber} className="CV-page" />
            </Document>
        </Container>
    )
}