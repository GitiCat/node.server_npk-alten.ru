import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Licences extends React.Component {

	componentDidMount() {
		require("../../../../../public/scripts/fm.revealator.jquery.js");
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
										<label key={index.toString()} for={"lic-slider-input-" + index.toString()}/>
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