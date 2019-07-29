import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faPhone, faUser, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

class FeedbackBtn extends React.Component {

	componentDidMount() {
		require("../../../../public/scripts/fm.revealator.jquery.js");
		let self = this;

		$(".in-lab input").keyup(function() {
			if($(this).val().length > 0) {
				$(this).closest(".in-lab input").addClass('filled');
			} else {
				$(this).closest(".in-lab input").removeClass('filled');
			}
		});

		$(".fb-btn-icon--cont").on("click", function() {
			let delay = 600,
				cActive = "active",
				eShow = "e-show",
				fShow = "f-show";
			let formChild = $(".form-cont form").children();
			
			$(formChild).each((index, element) => {
				$(element).toggleClass(eShow);
				$(element).css("transitionDelay", 0.08 * (index + 1) + "s");
			});

			$(".fb-btn-cont").toggleClass(cActive);
			$(".form-cont").delay(delay).toggleClass(fShow);
		});
	}

	render() {
		return(
			<Container as="div" bsPrefix="fb-btn-cont">
				<Container as="div" bsPrefix="fb-btn-icon--cont">
					<FontAwesomeIcon icon={faPhoneVolume} className="fb-btn-icon"/>
				</Container>
				<Container as="div" bsPrefix="fb-btn-context">
					<Container as="div" bsPrefix="form-cont init-el--f">
						{/*
							feedback form for input message
						*/}
						<form method="post" action="/feedback-out-message">
							<label className="in-lab init-el--e" for="name">
								<input type="text" id="name"></input>
								<label for="name">Имя</label>
								<FontAwesomeIcon icon={faUser} className="form-icon"/>
							</label>
							<label className="in-lab init-el--e" for="mail">
								<input type="email" id="mail"></input>
								<label for="mail">Почта</label>
								<FontAwesomeIcon icon={faEnvelope} className="form-icon"/>
							</label>
							<label className="in-lab init-el--e" for="tel">
								<input type="tel" id="tel"></input>
								<label for="tel">Телефон</label>
								<FontAwesomeIcon icon={faPhone} className="form-icon"/>
							</label>
							<label className="area-lab init-el--e" for="message">
								<textarea name="message"></textarea>
							</label>
							<Container as="div" bsPrefix="about-form-text init-el--e">
								<p>
									Заполняя данную форму вы принимаете условия 
									<Link to=""> Соглашения об использовании </Link>
									сайта, и соглашаетесь с <Link to="">Правилами
									обработки и использовании персональных данных</Link>
								</p>
							</Container>
							<Container as="div" bsPrefix="submit-cont init-el--e">
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