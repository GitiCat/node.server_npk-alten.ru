import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductCard from "../../elements/ProductCard/ProductCard"

class ProductionsComponent extends React.Component {
    render() {
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
            						Зарядно - разрядные устройства
            					</Container>
            				</Row>
            				<Row>
            					<Container as="div" bsPrefix="product-category-text__subtitle">
            						<p>Зарядно - разрядные устройства предназначены для разяда/разряда 
            						литий - ионных аккумуляторов и батарей на их основе.</p>
            						<p>Представляет собой электронный переносной настольный прибор, 
            						созданный из электронных блоков, поставляемых ОАО ВЕЛТЕК, в защитном
            						контейнере - чемодане модели 4412.G с применением монтажного комплекта
            						контейнера.</p>
            						<p>В комплект поставки ЗРУ входит рабочий шнур для подключения батареи и
            						шнур сетевой, а так же руководство по эксплуатации, совмещенным с паспортом.</p>
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