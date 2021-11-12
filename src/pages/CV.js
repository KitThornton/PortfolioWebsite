import React from 'react'
import {Document, Page} from 'react-pdf/dist/umd/entry.webpack';
import {Button, Container, Row, Col, Tooltip, OverlayTrigger} from "react-bootstrap";
import {RiFileDownloadLine} from 'react-icons/all';
import {Link} from "react-router-dom";
import file from '../cv_142.pdf'
// import Thornton_Kit_close from "../Thornton_Kit_close.jpg"
import './CV.css';
import throttle from "lodash.throttle";
import {IconContext} from "react-icons";

export default class CV extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            width: null,
            numPages: null,
            pageNumber: 1
        }
        this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
        this.changePage = this.changePage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.throttledFunction = throttle(this.setDivSize, 100);
    }

    componentDidMount() {
        this.setDivSize()
        window.addEventListener("resize", this.throttledFunction)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.throttledFunction)
    }

    setDivSize = () => {
        let element = document.getElementById('pdfWrapper');
        if (!element.getBoundingClientRect().width) return

        this.setState({width: element.getBoundingClientRect().width})
    }

    onDocumentLoadSuccess({numPages}) {
        this.setState({
            numPages: numPages,
            pageNumber: 1
        });
    }

    changePage(offset) {
        let prevPageNumber = this.state.pageNumber;
        this.setState({
            pageNumber: prevPageNumber + offset
        })
    }

    previousPage = () => this.changePage(-1)

    nextPage = () => this.changePage(1)

    render() {

        return (
            <div>
            <Container fluid className="CV d-none d-md-inline-block my-auto">
                <Row>
                    <Col className="my-auto">
                        Page {this.state.pageNumber} of {this.state.numPages}
                    </Col>
                    <Col className="icon my-auto">
                        <Overlay />
                    </Col>
                    <Col className="my-auto">
                        <Button
                            type="button"
                            disabled={this.state.pageNumber <= 1}
                            onClick={this.previousPage}
                            variant="secondary"
                            className="btn-page"
                        >
                            Previous
                        </Button>

                        <Button
                            type="button"
                            variant="secondary"
                            disabled={this.state.pageNumber >= this.state.numPages}
                            onClick={this.nextPage}
                            className="btn-page"
                        >
                            Next
                        </Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div id="placeholderWrapper"/>
                        <div id="pdfWrapper" ref={(ref) => this.pdfWrapper = ref}>
                            <Document
                                file={file}
                                onLoadSuccess={this.onDocumentLoadSuccess}
                            >
                                <Page pageNumber={this.state.pageNumber} width={this.state.width}/>
                            </Document>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/*<img src={Thornton_Kit_close} className="d-inline-block d-md-none" style={{width:"100%", height:"auto"}} alt={"test"}/>*/}
        </div>
        )
    }
}

const Overlay = () => {
    return(
        <OverlayTrigger
            placement="right"
            delay={{show: 100, hide: 400}}
            overlay={renderTooltip}
        >
            <Link to={file} target="_blank" download>
                <IconContext.Provider value={{ size: "2.5em" }}>
                    <RiFileDownloadLine/>
                </IconContext.Provider>
            </Link>
        </OverlayTrigger>
    )
}

const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Download CV
    </Tooltip>
);