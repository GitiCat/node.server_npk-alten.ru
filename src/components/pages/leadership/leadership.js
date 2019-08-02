import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import axios from "axios"

import { faUsers } from "@fortawesome/free-solid-svg-icons"
import Header from "../../blocks/header/header"
import LeadershipItem from "./leadership-item"
import LeadershipSelectItem from "./leadership-select-item"

class Leadership extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			errors: null,
			isLoading: false,
		}
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		axios({
			method: "get",
			responseType: "json",
			url: "/api/getInformations"
		})
		.then(response => {
			this.setState({
				data: response.data,
				isLoading: false
			});
		})
		.catch(error => {
			this.setState({
				errors: error,
				isLoading: false
			});
		});
	}

	render() {

		const { data, errors, isLoading } = this.state;
		const isParams = this.props.match.params.id != null ? true : false,
			  selectUrl = isParams ? this.props.match.params.id : null;

		return(
			<Container fluid className="ls-cont">
				<Row>
					<Header title="Руководство" subtitle="Руководители нашего предприятия" icon={faUsers}/>
				</Row>
				<Row>
					<React.Fragment>
						{ !isLoading && 
							<Container as="div" bsPrefix="ls-content">
								{ !isParams ? (
										data.map((element, index) => {
											return (
												<LeadershipItem key={index.toString()} 
													data={element} 
													index={index}
													location={this.props.location.pathname}/>
											)
										})
									) : (
										data.map((element, index) => {
											if(element["url"].replace("/", "") == selectUrl) {
												return (
													<LeadershipSelectItem key={index.toString()} data={element}/>
												)
											}
										})
									)
								}
							</Container>
						}
					</React.Fragment>
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