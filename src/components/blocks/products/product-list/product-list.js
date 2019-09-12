import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

import ProductListItem from "./product-list-item";

export default class ProductList extends React.Component {

	constructor(props) {
		super(props);

		this.onInputChange = this.onInputChange.bind(this)
	}

	onInputChange(event) {
		let id = event.target.dataset.itemId
		this.props.setIndex(id)
	}

	render() {

		const { data } = this.props

		return(
			<Container as="div" bsPrefix="prod-list">
				{
					data.map((element, index) => {
						return (
							<React.Fragment key={index.toString()}>
								<input name="product-list-input"
									type="radio"
									id={`product-list-input-${index.toString()}`}
									data-item-id={index.toString()}
									onChange={this.onInputChange}/>
								<ProductListItem name={element["title"]} 
									img={element["bg_image"]}
									id={index.toString()}/>
							</React.Fragment>
						)
					})
				}
			</Container>
		)
	}
}

ProductList.propTypes = {
	data: PropTypes.array.isReqiured
}