import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

import ProductionsListItem from "./prod-list-item"

const ProductionsList = ({data = {}, selectProduct}) => (
	<Container as="div" bsPrefix="production-catalog-list">
		{
			data.map((item, index) => {
				return (
					<ProductionsListItem key={index} 
						id={index} 
						imageUrl={item.prod_images} 
						name={item.prod_name}
						onChange={() => selectProduct()}/>
				)
			})
		}
	</Container>
)

export default ProductionsList;