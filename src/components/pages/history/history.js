import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

class HistoryComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        fetch('/api/getHistoryData', {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(res => res.json()).then(data => this.setState({data}));
    }
    
    render() {
        
        const { data } = this.state;
        console.log(data);

        return (
            <Container fluid className="intro-container">
                <Row>
                    <Container fluid className="intro-header-container">
                        <Container as="div" bsPrefix="intro-header--text">
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Container as="div" bsPrefix="intro-header-title">
                                        {data["art_title"]}
                                    </Container>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <Container as="div" bsPrefix="intro-header-subtitle">
                                        {data["art_subtitle"]}
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                </Row>
                <Container className="intro-text">
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Container as="div" bsPrefix="intro-descriptor">
                                <div dangerouslySetInnerHTML={{__html: data["art_descriptor"]}}/>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default HistoryComponent;