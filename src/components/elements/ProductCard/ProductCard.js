import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class ProductCard extends React.Component {

	render() {

		console.log(this.props);

		return (
			<Container fluid className="product-card__container">
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Container as="div" bsPrefix="product-card__image" style={{backgroundImage: 'url(' + this.props.imgUrl + ')'}}></Container>
					</Col>
				</Row>
				<Row>
					<Col ls={12} md={12} sm={12} xs={12}>
						<Container as="div" bsPrefix="product-card__descriptor">
							<Container as="div" bsPrefix="product-card__name">
								{this.props.p_name}
							</Container>
							<Container as="div" bsPrefix="product-card__type">
								{this.props.p_type}
							</Container>
						</Container>
					</Col>
				</Row>
				<Row>
					<Col ls={12} md={12} sm={12} xs={12}>
						<Container as="div" bsPrefix="product-card__link">
							<Link to={this.props.p_link}>Подробнее</Link>
						</Container>
					</Col>
				</Row>
			</Container>
		);
	}
}

ProductCard.propTypes = {
	imgUrl: PropTypes.string,
	p_name: PropTypes.string,
	p_type: PropTypes.string,
	p_link: PropTypes.string
}

export default ProductCard;