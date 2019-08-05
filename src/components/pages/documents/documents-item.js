import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DocumentItem = ({data = [], icon}) => (
	<Container as="div" bsPrefix="doc-item-cont">
		<Container as="div" bsPrefix="item-name">
			<span>
				{data.name}
			</span>
			<span>
				Категория: {data.category}
			</span>
		</Container>
		<Container as="div" bsPrefix="item-context">
			{data.isDescVisible == 1 && 
				<Container as="div" bsPrefix="item-desc" dangerouslySetInnerHTML={{__html: data["desc"]}}></Container>
			}
			<button className="download-file" data-url={data.path}>
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