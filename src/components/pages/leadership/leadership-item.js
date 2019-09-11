import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const leadershipItem = ({data = [], index, location}) => (
	<Container key={index.toString()} as="div" bsPrefix="ld-item">
		<Container as="div" bsPrefix="p-l-cont">
			<Container as="div" bsPrefix="ld-photo" style={{backgroundImage: "url(" + data.m_image + ")"}}></Container>
			<Container as="div" bsPrefix="link-cont">
				<Link to={`?id=${data.id}`} onClick={event => {
					this.props.history.push(event.target.href)
				}}>Читать...</Link>
			</Container>
		</Container>
		<Container as="div" bsPrefix="about-cont">
			{ data.is_title_visible == true &&
				<Container as="div" bsPrefix="a-title">
					{data.title}
				</Container>
			}
			{ data.is_subtitle_visible == 1 &&
				<Container as="div" bsPrefix="a-subtitle">
					{data.subtitle}
				</Container>
			}
			<Container as="div" bsPrefix="a-desc" dangerouslySetInnerHTML={{__html: data["text"]}}></Container>
		</Container>
	</Container>
)

export default leadershipItem;