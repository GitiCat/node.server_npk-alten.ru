import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import ProductListItem from "./product-list-item";

const ProductList = ({data = []}) => (
	<Container as="div" bsPrefix="prod-list">
		{
			data.map((element, index) => {
				return (
					<React.Fragment>
						<input name="product-list-input"
							type="radio"
							id={`product-list-input-${index.toString()}`}/>
						<ProductListItem key={index.toString()} name={element["prod_name"]} 
							img={element["prod_images"]}
							id={index.toString()}/>
					</React.Fragment>
				)
			})
		}
	</Container>
)

export default ProductList;