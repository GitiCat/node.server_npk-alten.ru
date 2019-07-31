import React from "react";	
import {Container, Row, Col} from 'react-bootstrap';
import Header from "../../blocks/header/header";

import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import axios from "axios";

class ActivityComponent extends React.Component {

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
        axios({
            method: "get",
            responseType: "json",
            url: "/api/getActivityData"
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

    	const { data, isLoading, errors } = this.state;

        return (
            <React.Fragment>
                {!isLoading ? (
                    <Container fluid className="intro-container">
                        <Row>
                            <Header title={data["art_title"]} subtitle={data["art_subtitle"]} icon={faBoxOpen}/>
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
                    ) : (
                    <div>{errors.message}</div>
                    )
                }
            </React.Fragment>
        );
    }
}

export default ActivityComponent;