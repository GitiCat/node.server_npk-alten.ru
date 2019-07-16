import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHeadset, faLayerGroup, faVials, faUserMd, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux"

class ServicesBlock extends React.Component {

    componentDidMount() {
        require("../../../../public/scripts/fm.revealator.jquery.js");
    }

    render() {
        return(
            <Container fluid className="sc-container">
                <Row>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Container as="div" bsPrefix="sc-info-title ms-title-h2">
                            <h2>
                                <span>
                                    {this.props.data.services.title}
                                </span>
                            </h2>
                        </Container>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12}>
                        <Container as="div" bsPrefix="sc-info-desc ms-desc-1">
                            <p>
                                {this.props.data.services.desc}
                            </p>
                        </Container>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={2} md={6} sm={12} xs={12}>
                        <Container as="div" bsPrefix="sc-element">
                            <p>
                                <FontAwesomeIcon icon={faHeadset} className="sc-elem-icon revealator-slideup revealator-delay1 revealator-once"/>
                            </p>
                            <br></br>
                            <p className="sc-elem-title">
                                {this.props.data.services.support.title}
                            </p>
                            <br></br>
                            <p className="sc-elem-desc">
                                {this.props.data.services.support.descriptor}
                            </p>
                        </Container>
                    </Col>
                    <Col lg={2} md={6} sm={12} xs={12}>
                        <Container as="div" bsPrefix="sc-element">
                            <p>
                                <FontAwesomeIcon icon={faLayerGroup} className="sc-elem-icon revealator-slideup revealator-delay2 revealator-once"/>
                            </p>
                            <br></br>
                            <p className="sc-elem-title">
                                {this.props.data.services.problems.title}
                            </p>
                            <br></br>
                            <p className="sc-elem-desc">
                                {this.props.data.services.problems.descriptor}
                            </p>
                        </Container>
                    </Col>
                    <Col lg={2} md={6} sm={12} xs={12}>
                        <Container as="div" bsPrefix="sc-element">
                            <p>
                                <FontAwesomeIcon icon={faFileSignature} className="sc-elem-icon revealator-slideup revealator-delay3 revealator-once"/>
                            </p>
                            <br></br>
                            <p className="sc-elem-title">
                                {this.props.data.services.development.title}
                            </p>
                            <br></br>
                            <p className="sc-elem-desc">
                                {this.props.data.services.development.descriptor}
                            </p>
                        </Container>

                    </Col>
                    <Col lg={2} md={6} sm={12} xs={12}>
                        <Container as="div" bsPrefix="sc-element">
                            <p>
                                <FontAwesomeIcon icon={faVials} className="sc-elem-icon revealator-slideup revealator-delay4 revealator-once"/>
                            </p>
                            <br></br>
                            <p className="sc-elem-title">
                                {this.props.data.services.tests.title}
                            </p>
                            <br></br>
                            <p className="sc-elem-desc">
                                {this.props.data.services.tests.descriptor}
                            </p>
                        </Container>

                    </Col>
                    <Col lg={2} md={6} sm={12} xs={12}>
                        <Container as="div" bsPrefix="sc-element">
                            <p>
                                <FontAwesomeIcon icon={faUserMd} className="sc-elem-icon revealator-slideup revealator-delay5 revealator-once"/>
                            </p>
                            <br></br>
                            <p className="sc-elem-title">
                                {this.props.data.services.technicalAssistance.title}
                            </p>
                            <br></br>
                            <p className="sc-elem-desc">
                                {this.props.data.services.technicalAssistance.descriptor}
                            </p>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state.HomeReducer
    }
}

export default connect(mapStateToProps)(ServicesBlock);