import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

export default class ProductListItem extends React.Component {
	render() {

		const { name, img, id } = this.props

		return (
			<Container as="label" htmlFor={`product-list-input-${id}`} bsPrefix="pdl-i-cont">
				<Container as="div" bsPrefix="pdl-i-img"
					style={{backgroundImage: "url(" + img + ")"}}/>
				<Container as="div" bsPrefix="pdl-i-name">
					{name}
				</Container>
			</Container>
		)
	}
}

ProductListItem.propTypes = {
	name: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired
}