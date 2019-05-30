import React from "react"
import {Container, Row, Col} from "react-bootstrap";
import MenuBlock from "../menu/menu";

class HeaderComponent extends React.Component {
    render() {
        return (
            <Container as="header" bsPrefix="header" id="header">
                <Container fluid>
                    <Row>
                        <Col lg={3} md={3} sm={2} xs={12}>
                            <div className="title-logo" id="title-logo">АЛЬТЭН</div>
                        </Col>
                        <Col lg={7} md={7} sm={7} xs={12} className="col-menu-items ml-auto">
                            <div className="navbar justify-content-lg-end" id="header-navbar">
                                <div className="nav navbar-nav bg-faded">
                                    <MenuBlock/>
                                </div>
                            </div>
                        </Col>
                        <div className="vertical-separator">&nbsp;</div>
                        <Col lg={1} md={1} sm={1} xs={1} className="col-menu-language">
                            <div className="language-button">

                            </div>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}
export default HeaderComponent;