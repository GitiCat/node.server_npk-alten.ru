import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

class FeedbackBtn extends React.Component {
	render() {
		return(
			<Container as="div" bsPrefix="fb-btn-cont">
				<Container as="div" bsPrefix="fb-btn-icon--cont">
					<FontAwesomeIcon icon={faPhoneVolume} className="fb-btn-icon"/>
				</Container>
				<Container as="div" bsPrefix="fb-btn-context">

				</Container>
			</Container>
		)
	}
}

export default FeedbackBtn;