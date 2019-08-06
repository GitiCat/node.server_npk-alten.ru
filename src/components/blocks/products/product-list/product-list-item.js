import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const ProductListItem = ({name, img, id}) => (
	<Container as="label" htmlFor={`product-list-input-${id}`} bsPrefix="pdl-i-cont" data-item-id={id}>
		<Container as="div" bsPrefix="pdl-i-img"
			style={{backgroundImage: "url(../../../public/images/" + img + ")"}}/>
		<Container as="div" bsPrefix="pdl-i-name">
			{name}
		</Container>
	</Container>
)

export default ProductListItem;