import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from "react-bootstrap"

const ProductionsListItem = ({imageUrl, name, id, onChange}) => (
	<React.Fragment>
		<input type="radio" className="slide-input-buttons" id={'slide-input-' + id} name="bg-input"
		onChange={onChange}/>
		<Container as="div" bsPrefix="production-catalog-list--item__container">
			<label for={'slide-input-' + id} className="slide-check-label">
				<Container as="div" bsPrefix="production-catalog-list--item"
					style={{backgroundImage: "url(../../../../../public/images/" + imageUrl + ")"}}>
					<Container as="div" bsPrefix="item--background-hover"></Container>
					<Container as="div" bsPrefix="item--title">
						{name}
					</Container>
				</Container>
			</label>
		</Container>
	</React.Fragment>
)

export default ProductionsListItem;