import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios"

import Header from "../../blocks/header/header"
import ProductItem from "./product-item"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

class ProductionsComponent extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            data: [],
            errors: null,
            isLoading: true
        }
    }

    componentDidMount() {
        this.getData();
    }

    getData() {
        axios({
            method: "get",
            responseType: "json",
            url: "/api/getProduction"
        })
        .then(response => {
            this.setState({
                data: response.data,
                isLoading: false
            });
        })
        .catch(error => {
            this.setState({
                errors: error,
                isLoading: false
            });
        })
    }

    render() {

        const { data, errors, isLoading } = this.state;

        return(
            <Container fluid className="pd-into-cont">
                <Row>
                    <Header title="Продукция" subtitle="Продукция, выпускаемая предприятием" icon={faLayerGroup}/>
                </Row>
                <Row>
                    <Container as="div" bsPrefix="pd-into-content">
                        <React.Fragment>
                            { isLoading ? (
                                <Container as="div" bsPrefix="loading">
                                    Loading...
                                </Container>
                            ) : (
                                data["cat"].map((item, index) => {
                                    return (
                                        <Container key={index.toString()} as="div" bsPrefix="c-content">
                                            <Container as="div" bsPrefix="c-title">
                                                <Container as="div" bsPrefix="ms-title-h2">
                                                    <h2>
                                                        <span>
                                                            {item.category_title}
                                                        </span>
                                                    </h2>
                                                </Container>
                                                <Container as="div" bsPrefix="c-desc" dangerouslySetInnerHTML={{__html: item["category_descriptor"]}}>
                                                </Container>
                                            </Container>
                                            <Container as="div" bsPrefix="c-elems">
                                                {
                                                    data["prod"][item.category_name].map((element, index) => {
                                                        return (
                                                            <ProductItem data={element}/>
                                                        )
                                                    })
                                                }
                                            </Container>
                                        </Container>
                                    )
                                })
                            )
                            }
                        </React.Fragment>
                    </Container>
                </Row>
            </Container>
        )
    }
}

export default ProductionsComponent;