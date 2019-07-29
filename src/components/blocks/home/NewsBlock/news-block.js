import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

const NewsBlock = ({id, title, desc, category, date, imgUrl, logo, url}) => (
	<Container key={id} as="div" bsPrefix="n-bl-cont">
		<Container as="div" bsPrefix="n-bl-bg"
			style={{backgroundImage: "url(" + imgUrl + ");"}}>
			<Container as="div" bsPrefix="n-bl-content">
				<Container as="div" bsPrefix="b-bl-c-category">
					<span>
						{category}
					</span>
				</Container>
				<Container as="div" bsPrefix="b-bl-c-title">
					<h2>
						{title}
					</h2>
				</Container>
				<Container as="div" bsPrefix="b-bl-c-desc">
					<p>
						{desc}
					</p>
				</Container>
				<Container as="div" bsPrefix="b-bl-c-link">
					<Link to={url}>
						<span>
							Читать
						</span>
						<FontAwesomeIcon icon={faArrowRight} className="b-bl-c-anim"/>
					</Link>
				</Container>
			</Container>
		</Container>
	</Container>
);

NewsBlock.PropTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	category: PropTypes.string,
	imgUrl: PropTypes.string,
	logo: PropTypes.string,
	url: PropTypes.string
}

export default NewsBlock;