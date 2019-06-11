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
        fetch('/api/getCatProduction', {
        	headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(response => this.setState({data: response}));
    }

    render() {

    	const { data } = this.state;

    	if(data.length !== 0) {
    		console.log(data[1].category_name);
    	}

        return (
            <Container fluid className="intro-container">
            	<Row>
            		<Container fluid className="intro-header-container">
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
                                    {data.length !== 0 && data[0].category_title}
                                </Container>
                            </Row>
                            <Row>
                                <Container as="div" bsPrefix="product-category-text__subtitle">
                                    {data.length !== 0 && 
                                        <div dangerouslySetInnerHTML={{__html: data[0]["category_descriptor"]}}/>
                                    }
                                </Container>
                            </Row>
                        </Container>
                    </Row>
                    <Row>
                        <Container fluid className="product-category-text">
                            <Row>
                                <Container as="div" bsPrefix="product-category-text__title">
                                    {data.length !== 0 && data[1].category_title}
                                </Container>
                            </Row>
                            <Row>
                                <Container as="div" bsPrefix="product-category-text__subtitle">
                                    {data.length !== 0 && 
                                        <div dangerouslySetInnerHTML={{__html: data[1]["category_descriptor"]}}/>
                                    }
                                </Container>
                            </Row>
                        </Container>
                    </Row>
            		<Row>
            			<Container fluid className="product-category-text">
            				<Row>
            					<Container as="div" bsPrefix="product-category-text__title">
            						{data.length !== 0 && data[2].category_title}
            					</Container>
            				</Row>
            				<Row>
            					<Container as="div" bsPrefix="product-category-text__subtitle">
                                    {data.length !== 0 && 
                                        <div dangerouslySetInnerHTML={{__html: data[2]["category_descriptor"]}}/>
                                    }
            					</Container>
            				</Row>
            			</Container>
            		</Row>
	            	<Row>
	            		<Col lg={4} md={6} sm={12} xs={12}>
	            			<ProductCard imgUrl="../../../../public/images/productions/zru/11.png"
	            				p_name="ЗРУ - 11"
	            				p_type="Зарядно / разрядное оборудование"
	            				p_link="/productions"/>
	            		</Col>
	            		<Col lg={4} md={6} sm={12} xs={12}>
	            			<ProductCard imgUrl="../../../../public/images/productions/zru/22.png"
	            				p_name="ЗРУ - 22"
	            				p_type="Зарядно / разрядное оборудование"
	            				p_link="/productions"/>
	            		</Col>
	            		<Col lg={4} md={6} sm={12} xs={12}>
	            			<ProductCard imgUrl="../../../../public/images/productions/zru/35.png"
	            				p_name="ЗРУ - 35"
	            				p_type="Зарядно / разрядное оборудование"
	            				p_link="/productions"/>
	            		</Col>
	            	</Row>
	            </Container>
            </Container>
        );
    }
}

export default ProductionsComponent;