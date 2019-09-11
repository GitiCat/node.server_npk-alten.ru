import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

import { faUsers } from "@fortawesome/free-solid-svg-icons"
import Header from "../../blocks/header/header"
import LeadershipItem from "./leadership-item"
import LeadershipSelectItem from "./leadership-select-item"

import Loading from "../../blocks/loading-data/loading"
import LoadingError from "../../blocks/loading-error/loading-error"
import ListEntry from "../../blocks/list-entry/listEntry"

class Leadership extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			data: [],
			searchObjectName: "leadership",
			search_id: null,
			isLoading: true,
			errors: false,
			errorMessage: null,
		}

		this.onClickRedirect = this.onClickRedirect.bind(this);
	}

	componentDidMount() {
		this.loadArticles();
	}

	async loadArticles() {

		let search = this.props.location.search;
		let params = new URLSearchParams(search)
		let id = params.get('id')

		let api_url = id !== null ? `/api/v0/articles/${id}/` : `/api/v0/articles/`

		let result = await fetch(api_url)
			.then(response => {
				if(response.status !== 200) {
					this.setState({
						errors: true,
						errorMessage: "В процессе загрузки данных возникла ошибка. Код статуса: " + response.status,
						isLoading: false
					})
					return;
				}

				return response.json()
			});

		if(this.state.errors == false) {
			if(id !== null) {
				this.setState({
					data: result,
					search_id: id,
					isLoading: false
				})
			} else {
				this.setState({
					data: result[this.state.searchObjectName],
					search_id: id,
					isLoading: false
				})
			}
		}
	}

	onClickRedirect(event) {
		console.log(event)
		event.preventDefault();
	}

	render() {

		const { data, isLoading, errors, errorMessage, search_id } = this.state;
		const isSearch = search_id !== null ? true : false;

		return(
			<Container fluid className="ls-cont">
				<Row>
					<Header title={this.props.pages_opt.leadership.title} subtitle={this.props.pages_opt.leadership.subtitle} icon={faUsers}/>
				</Row>
				<Row>
					<React.Fragment>
						{isLoading ? (
								<Loading/>
							) : (
								<Container as="div" bsPrefix="ls-content">
									{errors ? (
											<LoadingError error_message={errorMessage}/>
										) : (
											<React.Fragment>
												{!isSearch ? (
														data.map((element, index) => {
															if(element.is_article_enable == true) {
																return (
																	<LeadershipItem key={index.toString()} 
																		data={element}
																		index={index}
																		location={this.props.location.pathname}/>
																)
															}
														})
													) : (
														<LeadershipSelectItem data={data}/>
													)
												}
											</React.Fragment>
										)
									} 
								</Container>
							)
						}
					</React.Fragment>
				</Row>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		pages_opt: state.PagesReducer
	}
}

export default connect(mapStateToProps)(Leadership);