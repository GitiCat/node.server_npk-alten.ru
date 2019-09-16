import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import NewsBlock from "./news-block";
import Loading from "../../loading-data/loading"
import LoadingError from "../../loading-error/loading-error"
import ListEntry from "../../list-entry/listEntry"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"

class NewsContainer extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			data: [],
			isLoading: true,
			errors: false,
			errorMessage: null
		}
	}

	async componentWillMount() {
		let api_url = "/api/v0/news/"
		let response = await this.loadNews(api_url);

		if(this.state.errors == false) {
			this.setState({
				data: response,
				isLoading: false
			})
		}
	}

	async loadNews(url) {
		let result = await fetch(url)
			.then(response => {
				if(response.status !== 200) {
					this.setErrorsStatue(response.status, response.statusText);
					return;
				}

				return response.json()
			})

		return result.slice(0, 2);
	}

	setErrorsStatus(status_code, error_message) {
		let error_string = `В процессе загрузки возникла ошибка: ${error_message}. STATUS CODE: ${status_code}`;

		this.setStatue({
			isLoading: false,
			errors: true,
			errorMessage: error_string
		})
	}

	render() {

		const { data, isLoading, errors, errorMessage } = this.state;

		return(
			<Container fluid className="news-cont">
				<FontAwesomeIcon icon={faNewspaper} className="ns-bg-icon"/>
				<Row>
					<Container as="div" bsPrefix="news-title ms-title-h2">
						<h2>
							<span>
								{this.props.news.news.title}
							</span>
						</h2>
					</Container>
				</Row>
				<Row>
					<Container as="div" bsPrefix="news-subtitle ms-desc-1">
						<p>
							{this.props.news.news.subtitle}
						</p>
					</Container>
				</Row>
				<Row>
					<Container as="div" bsPrefix="btn-container">
						<Link to="/news/">Все новости</Link>
					</Container>
				</Row>
				<Row>
					<React.Fragment>
						{isLoading ? (
								<Loading/>
							) : (
								<React.Fragment>
									{errors ? (
											<LoadingError error_message={errorMessage}/>
										) : (
											<React.Fragment>
												{data.length == 0 ? (
														<ListEntry/>
													) : (
														<Container as="div" bsPrefix="news-content">
															<Container as="div" bsPrefix="block-cont">
																{ !isLoading &&
																	data.map((item, index) => {
																		return(
																			<NewsBlock key={item.index}
																			title={item.title}
																			desc={item.descriptor}
																			category={item.category}
																			date={item.date}
																			imgUrl={item.bg_image}
																			logo={item.logo}
																			url={item.url}
																			original_url={item.original_url}/>
																		)
																	})
																}
															</Container>
														</Container>
													)

												}
											</React.Fragment>
										)

									}
								</React.Fragment>
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
		news: state.HomeReducer
	}
}

export default connect(mapStateToProps)(NewsContainer);