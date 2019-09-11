import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import ProductListItem from "./product-list-item";

const ProductList = ({data = []}) => (
	<Container as="div" bsPrefix="prod-list">
		{
			data.map((element, index) => {
				return (
					<React.Fragment key={index.toString()}>
						<input name="product-list-input"
							type="radio"
							id={`product-list-input-${index.toString()}`}
							data-item-id={index.toString()}/>
						<ProductListItem name={element["title"]} 
							img={element["bg_image"]}
							id={index.toString()}/>
					</React.Fragment>
				)
			})
		}
	</Container>
)

export default ProductList;