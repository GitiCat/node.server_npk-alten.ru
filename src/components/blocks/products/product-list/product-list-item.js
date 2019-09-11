import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const ProductListItem = ({name, img, id}) => (
	<Container as="label" htmlFor={`product-list-input-${id}`} bsPrefix="pdl-i-cont">
		<Container as="div" bsPrefix="pdl-i-img"
			style={{backgroundImage: "url(" + img + ")"}}/>
		<Container as="div" bsPrefix="pdl-i-name">
			{name}
		</Container>
	</Container>
)

export default ProductListItem;