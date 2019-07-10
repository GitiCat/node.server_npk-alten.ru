import React from "react";
import {Container, Row, Col} from "react-bootstrap"
import {Link} from "react-router-dom"
import {connect} from "react-redux"

class InformationBlock extends React.Component {

    render() {
        return(
            <Container fluid className="in-ab-cont m-cont-pos">
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12} className="l-pos">
                        <Container as="div" bsPrefix="in-b-profit">
                            <ul>
                                {
                                    this.props.data.about.stages.map( (elem, index) => {
                                        return (
                                            <li key={index.toString()}>
                                                <span>{elem.number}</span>
                                                <span>{elem.text}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </Container>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} className="r-pos">
                        <Container as="div" bsPrefix="in-b-about">
                            <h2>
                                <span>КРАТКО!</span>
                                <br></br>
                                <span>ЧТО НУЖНО</span>
                                <br></br>
                                <span>ЗНАТЬ О НАС</span>
                            </h2>
                            <p>
                                {
                                    this.props.data.about.descriptor
                                }
                            </p>
                            <p>
                                <small>На этом наша история не заканчивается</small>
                                <br></br>
                                <Link to={this.props.data.about.url} className="arrow-link">
                                    Узнайте ее!                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
                                </Link>
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

export default connect(mapStateToProps)(InformationBlock);