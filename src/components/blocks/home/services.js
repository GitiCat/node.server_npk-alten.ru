import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHeadset, faLayerGroup, faVials, faUserMd, faFileSignature } from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux"

class ServicesBlock extends React.Component {
    render() {
        return(
        <Container as="div" bsPrefix="services-provided__container container-fluid">
            <Row className="justify-content-lg-center justify-content-md-center">
                <Col lg={2} md={6} sm={6} xs={12} className="services-provided__columns">
                    <Container as="div" bsPrefix="services-provided__item services-provided__item--hover">
                        <FontAwesomeIcon icon={faHeadset} className="services-provided__item--icon"/>
                        <Container as="div" className="services-provided__item--title">
                            {this.props.homeComponents.services.support.title}
                        </Container>
                        <hr></hr>
                        <Container as="div" className="services-provided__item-descriptor">
                            {this.props.homeComponents.services.support.descriptor}
                        </Container>
                    </Container>
                </Col>
                <Col lg={2} md={6} sm={6} xs={12} className="services-provided__columns">
                    <Container as="div" bsPrefix="services-provided__item services-provided__item--hover">
                        <FontAwesomeIcon icon={faFileSignature} className="services-provided__item--icon"/>
                        <Container as="div" className="services-provided__item--title">
                            {this.props.homeComponents.services.problems.title}
                        </Container>
                        <hr></hr>
                        <Container as="div" className="services-provided__item--descriptor">
                            {this.props.homeComponents.services.problems.descriptor}
                        </Container>
                    </Container>
                </Col>
                <Col lg={2} md={6} sm={6} xs={12} className="services-provided__columns">
                    <Container as="div" className="services-provided__item services-provided__item--hover">
                        <FontAwesomeIcon icon={faLayerGroup} className="services-provided__item--icon"/>
                        <Container as="div" className="services-provided__item--title">
                            {this.props.homeComponents.services.development.title}
                        </Container>
                        <hr></hr>
                        <Container as="div" className="services-provided__item--descriptor">
                            {this.props.homeComponents.services.development.descriptor}
                        </Container>
                    </Container>
                </Col>
                <Col lg={2} md={6} sm={6} xs={12} className="services-provided__columns">
                    <Container as="div" className="services-provided__item services-provided__item--hover">
                        <FontAwesomeIcon icon={faVials} className="services-provided__item--icon"/>
                        <Container as="div" className="services-provided__item--title">
                            {this.props.homeComponents.services.tests.title}
                        </Container>
                        <hr></hr>
                        <Container as="div" className="services-provided__item--descriptor">
                            {this.props.homeComponents.services.tests.descriptor}
                        </Container>
                    </Container>
                </Col>
                <Col lg={2} md={12} sm={6} xs={12} className="services-provided__columns">
                    <Container as="div" className="services-provided__item services-provided__item--hover">
                        <FontAwesomeIcon icon={faUserMd} className="services-provided__item--icon"/>
                        <Container as="div" className="services-provided__item--title">
                            {this.props.homeComponents.services.technicalAssistance.title}
                        </Container>
                        <hr></hr>
                        <Container as="div" className="services-provided__item--descriptor">
                           {this.props.homeComponents.services.technicalAssistance.descriptor}
                        </Container>
                    </Container>
                </Col>
            </Row>
        </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        homeComponents: state.HomeReducer
    }
}

export default connect(mapStateToProps)(ServicesBlock);