import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import Header from "../../blocks/header/header";
import axios from "axios";

import { faBookReader } from "@fortawesome/free-solid-svg-icons"

class HistoryComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            errors: null,
            isLoading: false
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios ({
            method: "get",
            responseType: "json",
            url: "/api/getHistoryData"
        })
        .then(response => {
            this.setState({
                data: response.data,
                isLoading: false
            })
        })
        .catch(error => {
            this.setState({
                errors: error,
                isLoading: false
            })
        })
    }
    
    render() {
        
        const { data, isLoading } = this.state;

        return (
            <Container fluid className="intro-container">
                <Row>
                    <Header title={data["art_title"]} subtitle={data["art_subtitle"]} icon={faBookReader}/>
                </Row>
                <Container className="intro-text">
                    <Row>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Container as="div" bsPrefix="intro-descriptor">
                                { !isLoading &&
                                    <div dangerouslySetInnerHTML={{__html: data["art_descriptor"]}}/>
                                }
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default HistoryComponent;