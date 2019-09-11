import React from "react";	
import {Container, Row, Col} from 'react-bootstrap';
import Header from "../../blocks/header/header";
import Loading from "../../blocks/loading-data/loading"

import { faBoxOpen } from "@fortawesome/free-solid-svg-icons"
import { connect } from "react-redux"

class ActivityComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            searchObjectName: "activity",
			data: [],
            isLoading: true,
            errors: false,
            errorMessage: null
		}
	}

	componentDidMount() {
		this.loadArticle()
	}

	async loadArticle() {
        let result = await fetch("/api/v0/articles/")
            .then(response => {
                if(response.status !== 200) {
                    this.setState({
                        isLoading: false,
                        errors: true,
                        errorMessage: "В процессе загрузки данных возникла ошибка. Код статуса: " + response.status
                    });
                    return;
                }

                return response.json()
            });

        if(this.state.errors == false) {
            this.setState({
                data: result[this.state.searchObjectName],
                isLoading: false
            });
        }
	}

    render() {

    	const { data, isLoading } = this.state;

        return (
            <Container fluid className="intro-container">
                { isLoading ? (
                        <Loading/>
                    ) : (
                        <React.Fragment>
                            <Row>
                                <Header title={this.props.pages_opt.activity.title} subtitle={this.props.pages_opt.activity.subtitle} icon={faBoxOpen}/>
                            </Row>
                            <Container className="intro-text">
                                <Row>
                                    <Col lg={12} md={12} sm={12} xs={12}>
                                        <Container as="div" bsPrefix="intro-descriptor">
                                            <div dangerouslySetInnerHTML={{__html: data[0]["text"]}}/>
                                        </Container>
                                    </Col>
                                </Row>
                            </Container>
                        </React.Fragment>
                    )
                }
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        pages_opt: state.PagesReducer
    }
}

export default connect(mapStateToProps)(ActivityComponent);