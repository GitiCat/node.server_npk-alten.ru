import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DocumentItem = ({data = [], category,  icon}) => (
	<Container as="div" bsPrefix="doc-item-cont">
		<Container as="div" bsPrefix="item-name">
			{data.is_title_visible == true &&
				<span>
					{data.title}
				</span>
			}
			<span>
				Категория: {category}
			</span>
		</Container>
		<Container as="div" bsPrefix="item-context">
			{data.is_descriptor_visible == true && 
				<Container as="div" bsPrefix="item-desc" dangerouslySetInnerHTML={{__html: data["descriptor"]}}></Container>
			}
			<button className="download-file" data-url="">
				<Container as="div" bsPrefix="d-content">
					<FontAwesomeIcon icon={icon} className="f-type-icon"/>
					<span>
						{data.name}
					</span>
				</Container>
			</button>
		</Container>
	</Container>
)

export default DocumentItem;