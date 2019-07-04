import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

import ProductionsListItem from "./prod-list-item"

import { selectProduct } from "../../actions/productions-select-change-actions" 

const ProductionsList = ({data = {}, dispatch}) => (
	<Container as="div" bsPrefix="production-catalog-list">
		{
			data.map((item, index) => {
				return (
					<ProductionsListItem key={index} 
						id={index} 
						imageUrl={item.prod_images} 
						name={item.prod_name}
						onChange={e => {
							e.preventDefault()
							dispatch(selectProduct(index))
						}}/>
				)
			})
		}
	</Container>
)

export default connect()(ProductionsList);