import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from "../../elements/ProductCard/ProductCard"

class ProductionsComponent extends React.Component {

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
        fetch('/api/getProduction', {
        	headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(response => this.setState({data: response}));
    }

    render() {

    	const { data } = this.state;
        console.log(data);
        
        return (
            <Container fluid className="intro-container">
            	<Row>
            		<Container fluid className="intro-header-container d-flex align-items-center">
	            		<Container as="div" bsPrefix="intro-header--text">
		            		<Row>
		            			<Col lg={12} md={12} sm={12} xs={12}>
		            				<Container as="div" bsPrefix="intro-header-title">
		            					Продукция
		            				</Container>
		            			</Col>
		            		</Row>
		            		<Row>
		            			<Col lg={12} md={12} sm={12} xs={12}>
		            				<Container as="div" bsPrefix="intro-header-subtitle">
		            					Продукция предприятия
		            				</Container>
		            			</Col>
		            		</Row>
		            	</Container>
	            	</Container>
            	</Row>
            	<Container className="intro-text">
                    <Row>
                        <Container fluid className="product-category-text">
                            <Row>
                                <Container as="div" bsPrefix="product-category-text__title">
                                    {data.length !== 0 && data.cat[0].category_title}
                                </Container>
                            </Row>
                            <Row>
                                <Container as="div" bsPrefix="product-category-text__subtitle">
                                    {data.length !== 0 && 
                                        <div dangerouslySetInnerHTML={{__html: data["cat"][0]["category_descriptor"]}}/>
                                    }
                                </Container>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        {data.length !== 0 &&
                            data["prod"]["primary_sources"].map(item => {
                                return (
                                    <Col lg={4} md={6} sm={12} xs={12}>
                                        <ProductCard imgUrl={item.prod_images}
                                            p_name={item.prod_name}
                                            p_type={item.prod_category_name}
                                            p_link={item.prod_url}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                        <Container fluid className="product-category-text">
                            <Row>
                                <Container as="div" bsPrefix="product-category-text__title">
                                    {data.length !== 0 && data.cat[1].category_title}
                                </Container>
                            </Row>
                            <Row>
                                <Container as="div" bsPrefix="product-category-text__subtitle">
                                    {data.length !== 0 && 
                                        <div dangerouslySetInnerHTML={{__html: data["cat"][1]["category_descriptor"]}}/>
                                    }
                                </Container>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        {data.length !== 0 &&
                            data["prod"]["rechargeable_batteries"].map(item => {
                                return (
                                    <Col lg={4} md={6} sm={12} xs={12}>
                                        <ProductCard imgUrl={item.prod_images}
                                            p_name={item.prod_name}
                                            p_type={item.prod_category_name}
                                            p_link={item.prod_url}/>
                                    </Col>
                                )
                            })
                        }
                    </Row>
            		<Row>
            			<Container fluid className="product-category-text">
            				<Row>
            					<Container as="div" bsPrefix="product-category-text__title">
            						{data.length !== 0 && data.cat[2].category_title}
            					</Container>
            				</Row>
            				<Row>
            					<Container as="div" bsPrefix="product-category-text__subtitle">
                                    {data.length !== 0 && 
                                        <div dangerouslySetInnerHTML={{__html: data["cat"][2]["category_descriptor"]}}/>
                                    }
            					</Container>
            				</Row>
            			</Container>
            		</Row>
	            	<Row>
                        {data.length !== 0 &&
                            data["prod"]["zru"].map(item => {
                                return (
                                    <Col lg={4} md={6} sm={12} xs={12}>
                                        <ProductCard imgUrl={item.prod_images}
                                            p_name={item.prod_name}
                                            p_type={item.prod_category_name}
                                            p_link={item.prod_url}/>
                                    </Col>
                                )
                            })
                        }
	            	</Row>
	            </Container>
            </Container>
        );
    }
}

export default ProductionsComponent;