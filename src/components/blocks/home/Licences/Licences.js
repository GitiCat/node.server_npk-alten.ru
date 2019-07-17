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
				<Container as="div" bsPrefix="lic-cont-logo"></Container>
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
					<Container as="div" bsPrefix="org-logos">
						<ul>
							
						</ul>
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