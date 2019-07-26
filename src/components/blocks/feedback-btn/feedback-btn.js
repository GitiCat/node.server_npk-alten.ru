import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faPhone, faUser } from "@fortawesome/free-solid-svg-icons";

class FeedbackBtn extends React.Component {

	componentDidMount() {
		let self = this;

		$(".in-lab input").keyup(function() {
			if($(this).val().length > 0) {
				$(this).closest(".in-lab input").addClass('filled');
			} else {
				$(this).closest(".in-lab input").removeClass('filled');
			}
		})
	}

	render() {
		return(
			<Container as="div" bsPrefix="fb-btn-cont">
				<Container as="div" bsPrefix="fb-btn-icon--cont">
					<FontAwesomeIcon icon={faPhoneVolume} className="fb-btn-icon"/>
				</Container>
				<Container as="div" bsPrefix="fb-btn-context">
					<Container as="div" bsPrefix="form-cont">
						{/*
							feedback form for input message
						*/}
						<form method="post" action="/feedback-out-message">
							<label className="in-lab" for="name">
								<input type="text" id="name"></input>
								<label for="name">Имя</label>
								<FontAwesomeIcon icon={faUser} className="form-icon"/>
							</label>
							<label className="in-lab" for="mail">
								<input type="email" id="mail"></input>
								<label for="mail">Почта</label>
								<FontAwesomeIcon icon={faEnvelope} className="form-icon"/>
							</label>
							<label className="in-lab" for="tel">
								<input type="tel" id="tel"></input>
								<label for="tel">Телефон</label>
								<FontAwesomeIcon icon={faPhone} className="form-icon"/>
							</label>
							<label className="area-lab" for="message">
								<textarea name="message"></textarea>
							</label>
							<Container as="div" bsPrefix="about-form-text">
								<p>
									Заполняя данную форму вы принимаете условия 
									<Link to=""> Соглашения об использовании </Link>
									сайта, и соглашаетесь с <Link to="">Правилами
									обработки и использовании персональных данных</Link>
								</p>
							</Container>
							<Container as="div" bsPrefix="submit-cont">
								<input type="submit" id="submit" className="submit"></input>
							</Container>
						</form>
					</Container>
				</Container>
			</Container>
		)
	}
}

export default FeedbackBtn;