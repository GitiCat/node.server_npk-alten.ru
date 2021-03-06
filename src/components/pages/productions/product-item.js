import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const ProductItem = ({data = [], category}) => (
	<Container as="div" bsPrefix="item-cont">
		<Container as="div" bsPrefix="item-bg" style={{backgroundImage: "url(../../../../public/images/" + data.bg_image + ")"}}></Container>
		<Container as="div" bsPrefix="item-bg-mask"></Container>
		<Container as="div" bsPrefix="item-context">
			<Container as="div" bsPrefix="item-name">{data.title}</Container>
			<Container as="div" bsPrefix="item-category">{category}</Container>
			<Container as="div" bsPrefix="item-link">
				<Link to={`/productions/zru${data.prod_url}`}>Перейти...</Link>
			</Container>
		</Container>
	</Container>
)

export default ProductItem;