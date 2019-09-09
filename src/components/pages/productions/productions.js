import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import ListEntry from "../../blocks/list-entry/listEntry"
import Loading from "../../blocks/loading-data/loading"
import LoadingError from "../../blocks/loading-error/loading-error"
import Header from "../../blocks/header/header"
import ProductItem from "./product-item"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

class ProductionsComponent extends React.Component {

	constructor(props) {
        super(props);

        this.state = {
            products: [],
            category: [],
            isLoading: true,
            errors: false,
            errormessage: null
        }
    }

    componentDidMount() {
        this.loadProducts();
    }

    async loadProducts() {
        let products_result = await fetch("/api/v0/products/")
            .then(response => {
                if(response.status !== 200) {
                    this.setState({
                        isLoading: false,
                        errors: true,
                        errorMessage: "В процессе загрузки данных возникла ошибка. Код статуса: " + response.status
                    })
                    return
                }

                return response.json()
            })

        let category_result = await fetch("/api/v0/products-category/")
            .then(response => {
                if(response.status !== 200) {
                    this.setState({
                        isLoading: false,
                        errors: true,
                        errorMessage: "В процессе загрузки данных возникла ошибка. Код статуса: " + response.status
                    })
                    return
                }

                return response.json()
            })

        if(this.state.errors == false) {
            this.setState({
                products: products_result,
                category: category_result,
                isLoading: false
            })
        }
    }

    render() {

        const { products, category, isLoading, errors, errorMessage } = this.state;
        console.log(products, category, isLoading, errors, errorMessage);


        return(
            <Container fluid className="pd-into-cont">
                <Row>
                    <Header title="Продукция" subtitle="Продукция, выпускаемая предприятием" icon={faLayerGroup}/>
                </Row>
                <Row>
                    <Container as="div" bsPrefix="pd-into-content">
                    {errors ? (
                            <LoadingError error_message={this.state.errorMessage}/>
                        ) : (
                            <React.Fragment>
                                { isLoading ? (
                                    <Container as="div" bsPrefix="loading">
                                        <Loading/>
                                    </Container>
                                ) : (
                                    category.map((item, index) => {
                                        return (
                                            <Container key={index.toString()} as="div" bsPrefix="c-content">
                                                <Container as="div" bsPrefix="c-title">
                                                    <Container as="div" bsPrefix="ms-title-h2">
                                                        <h2>
                                                            <span>
                                                                {item.title}
                                                            </span>
                                                        </h2>
                                                    </Container>
                                                    <Container as="div" bsPrefix="c-desc" dangerouslySetInnerHTML={{__html: item["descriptor"]}}>
                                                    </Container>
                                                </Container>
                                                <Container as="div" bsPrefix="c-elems">
                                                    {products[item["name"]].lenght == undefined ? (
                                                            <ListEntry/>
                                                        ) : (
                                                            products[item["name"]].map((element, index) => {
                                                                return (
                                                                    <ProductItem key={index.toString()} data={element} category={item.title}/>
                                                                )
                                                            })
                                                        )
                                                    }
                                                </Container>
                                            </Container>
                                        )
                                    })
                                )
                                }
                            </React.Fragment>
                        )
                    }
                    </Container>
                </Row>
            </Container>
        )
    }
}

export default ProductionsComponent;