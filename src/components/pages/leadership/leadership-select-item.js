import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const leadershipSelectItem = ({data = []}) => (
	<Container as="div" bsPrefix="s-ld-item">
		<Container as="div" bsPrefix="p-cont">
			<Container as="div" bsPrefix="s-ld-photo" style={{backgroundImage: "url(../../../../" + data.m_image + ")"}}></Container>
		</Container>
		<Container as="div" bsPrefix="s-about-cont">
			{ data.isTitleVisible == 1 &&
				<Container as="div" bsPrefix="s-a-title">
					{data.title}
				</Container>
			}
			{ data.isSubtitleVisible == 1 &&
				<Container as="div" bsPrefix="s-a-subtitle">
					{data.subtitle}
				</Container>
			}
			<Container as="div" bsPrefix="s-a-desc" dangerouslySetInnerHTML={{__html: data["descriptor"]}}></Container>
		</Container>
	</Container>
)

export default leadershipSelectItem;