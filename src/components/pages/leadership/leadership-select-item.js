import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const leadershipSelectItem = ({data = []}) => (
	<Container as="div" bsPrefix="s-ld-item">
		<Container as="div" bsPrefix="p-cont">
			<Container as="div" bsPrefix="s-ld-photo" style={{backgroundImage: "url(" + data.m_image + ")"}}></Container>
		</Container>
		<Container as="div" bsPrefix="s-about-cont">
			{ data.is_title_visible == true &&
				<Container as="div" bsPrefix="s-a-title">
					{data.title}
				</Container>
			}
			{ data.is_subtitle_visible == true &&
				<Container as="div" bsPrefix="s-a-subtitle">
					{data.subtitle}
				</Container>
			}
			<Container as="div" bsPrefix="s-a-desc" dangerouslySetInnerHTML={{__html: data["text"]}}></Container>
		</Container>
	</Container>
)

export default leadershipSelectItem;