import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

class InformationBlock extends React.Component {

    render() {
        return(
            <Container as="div" bsPrefix="volumetric-information-container about-information-container">
                    <Container as="div" bsPrefix="rear-plan-information-container about-rear-plan"></Container>
                    <Container as="div" bsPrefix="text-information-container about-text">
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Container as="div" bsPrefix="title-information-container about-title">
                                {this.props.homeComponents.about.title}
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Container as="div" bsPrefix="descriptor-information-container about-descriptor hyphenate" lang="ru">
                                {this.props.homeComponents.about.descriptor}
                            </Container>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12} className="d-flex">
                            <Container as="div" bsPrefix="link-information-container about-link ml-auto">
                                <Link to={this.props.homeComponents.about.url}>
                                    <svg>
                                        <rect></rect>
                                    </svg>
                                    <span>Читать далее...</span>
                                </Link>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        homeComponents: state.HomeReducer
    }
}

export default connect(mapStateToProps)(InformationBlock);