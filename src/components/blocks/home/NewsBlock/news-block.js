import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import PropTypes from "prop-types"

function dateComparison(publicationDate) {
	let today = new Date(),
		day = today.getDate(),
		mouth = today.getMonth() + 1,
		year = today.getFullYear(),
		currentDate = new Date(year, mouth, day);

	let strSplit = publicationDate.split(".");
	let strToDate = new Date(strSplit[2], strSplit[1], strSplit[0]);
	let delta = currentDate.getTime() - strToDate.getTime();
	let passed = Math.floor(delta / 1000 / 60 / 60 / 24);

	if(passed <= 3) {
		return true;
	} else {
		return false;
	}
}

const NewsBlock = ({id, title, desc, category, date, imgUrl, logo, url, original_url}) => (
	<Container as="div" bsPrefix="n-bl-cont">
		<Container as="div" bsPrefix="n-bl-bg"
			style={{backgroundImage: "url(" + imgUrl + ")"}}>
			<Container as="div" bsPrefix="n-bl-content">
				<Container as="div" bsPrefix="b-bl-c-category">
					<Container as="div" bsPrefix="b-bl-c-date-cat">
						<span>
							{date}
						</span>
						<span>
							{category}
						</span>
					</Container>
					<Container as="div" bsPrefix="b-bl-c-tags">
						{dateComparison(date) == true && 
							<Container as="div" bsPrefix="tags-new">
								Новое
							</Container>
						}
						<Container as="div" bsPrefix="tags-latest-news">
							Последнее
						</Container>
					</Container>
				</Container>
				<Container as="div" bsPrefix="b-bl-c-title">
					<h2>
						{title}
					</h2>
				</Container>
				<Container as="div" bsPrefix="b-bl-c-desc">
					<Container as="div" bsPrefix="desc-cont" dangerouslySetInnerHTML={{__html: desc}}></Container>
				</Container>
				<Container as="div" bsPrefix="b-bl-c-link">
					<Link to={url}>
						<span>
							Читать
						</span>
						<FontAwesomeIcon icon={faArrowRight} className="b-bl-c-anim"/>
					</Link>
					<Link to={original_url}>
						<span>
							Оригинальная статья
						</span>
						<FontAwesomeIcon icon={faArrowRight} className="b-bl-c-anim"/>
					</Link>
				</Container>
			</Container>
		</Container>
	</Container>
);

NewsBlock.propTypes = {
	title: PropTypes.string,
	desc: PropTypes.string,
	category: PropTypes.string,
	imgUrl: PropTypes.string,
	logo: PropTypes.string,
	url: PropTypes.string
}

export default NewsBlock;