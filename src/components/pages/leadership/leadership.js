import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "axios"

import { faUsers } from "@fortawesome/free-solid-svg-icons"
import Header from "../../blocks/header/header"

class Leadership extends React.Component {

	componentDidMount() {
		console.log(this);
	}

	render() {
		return(
			<Container fluid className="ls-cont">
				<Row>
					<Header title="Руководство" subtitle="Руководители нашего предприятия" icon={faUsers}/>
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

export default connect(mapStateToProps)(Leadership);