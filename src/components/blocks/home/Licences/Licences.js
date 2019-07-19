import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Licences extends React.Component {

	//	Метод изменения состояния 'label'
	//	при изменении состояния input 
	changeLableState() {
		// Текущий выбранный элемент
		let selected;

		$("input[name=lic-slider-input]").on("change", function(e) {

			if(selected !== undefined) {
				// Если имеется выбранный элемент, то удаляем класс
				$(selected).removeClass("checked");
			}

			//	element: объект вызвавший событие
			//	id: id выбранного объекта
			//	label: элемент для изменения
			let element = e.target,
				id = $(element).attr("id"),
				label = $("label[for=" + id + "]")

			if($(element).is(":checked")) {
				$(label).addClass("checked");
				selected = label;
			}


		});
	}

	initSlide() {
		let slides = $(".lic-slider--slide");
		let slidesLenght = slides.length;
	}

	nextSlide(slides = []) {

	}

	componentDidMount() {
		require("../../../../../public/scripts/fm.revealator.jquery.js");

		$(document).ready(() => {
			this.changeLableState();
			this.initSlide();
		});
	}

	render() {
		return (
			<Container fluid className="lic-container">
				<Container as="div" bsPrefix="lic-cont-logo"
					style={{backgroundImage: "url(../../../../../" + this.props.data.licences.bg_img.path + ")"}}></Container>
				<Row>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Container as="div" bsPrefix="lic-cont-title ms-title-h2">
							<h2>
								<span>
									{this.props.data.licences.title}
								</span>
							</h2>
						</Container>
					</Col>
					<Col lg={12} md={12} sm={12} xs={12}>
						<Container as="div" bsPrefix="lic-cont-desc ms-desc-1">
							<p>
								{this.props.data.licences.desc}
							</p>
						</Container>
					</Col>
				</Row>
				<Row>
					<Container as="div" bsPrefix="lic-content">
						<Container as="div" bsPrefix="org-logos">
							{
								this.props.data.licences.logos.map((item, index) => {
									return (
										<Container as="div" bsPrefix="logo-img--cont" key={index.toString()}
											style={{backgroundImage: "url(../../../../../" + item.path + ")"}}></Container>
									)
								})
							}
						</Container>
						<Container as="div" bsPrefix="lic-text-cont">
							<Container as="div" bsPrefix="lic-text">
								{this.props.data.licences.text}
							</Container>
							<Link to={this.props.data.licences.url}>Подробнее</Link>
						</Container>
					</Container>
					<Container as="div" bsPrefix="lic-slider-cont">
						<Container as="div" bsPrefix="lic-slider">
							{
								this.props.data.licences.slider.slides.map((item, index) => {
									return(
										<Container as="div" bsPrefix="lic-slider--slide" key={index.toString()}
											style={{backgroundImage: "url(../../../../../" + item.path + ")"}}/>
									)
								})
							}
						</Container>
						<Container as="div" bsPrefix="lic-slider-label--cont">
							{
								this.props.data.licences.slider.slides.map((item, index) => {
									return(
										<label key={index.toString()} className="lic-slide--label" for={"lic-slide-input-" + index.toString()}/>
									)
								})
							}
						</Container>
						<Container as="div" bsPrefix="lic-slider-input--cont">
							{
								this.props.data.licences.slider.slides.map((item, index) => {
									return(
										<input key={index.toString()} 
											type="radio" 
											name="lic-slider-input"
											id={"lic-slide-input-" + index.toString()}/>
									)
								})
							}
						</Container>
					</Container>
				</Row>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		data: state.HomeReducer
	}
}

export default connect(mapStateToProps)(Licences);