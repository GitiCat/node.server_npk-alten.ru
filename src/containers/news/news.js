import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"

import * as newsActions from '../../actions/news'

import Header from '../../components/blocks/header/header'
import Loading from '../../components/blocks/loading-data/loading'
import LoadingError from '../../components/blocks/loading-error/loading-error'
import ListEntry from '../../components/blocks/list-entry/listEntry'
import NewsItem from '../../components/pages/news/items/items'
import LongNewsItem from '../../components/pages/news/long-items/long-item'
import SelectedNewItem from '../../components/pages/news/selected/selected-item'


class NewsList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isLoading: true,
			errors: false,
			errorMessage: null
		}
	}

	async componentDidMount() {
		let api_url = '/api/v0/news/';
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
					this.setErrorsStatus(response.status, response.statusText);
					return;
				}
				return response.json()
			});
		return result;
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

		const { data, isLoading, errors, errorMessage } = this.state
		const { setNewsIndex } = this.props.newsActions
		const { news_reducer } = this.props

		let isArrayEntry = null

		if(data.length == undefined || data.length == 0) {
			isArrayEntry = true
		} else {
			isArrayEntry = false
		}

		let selectedIndex = news_reducer.index

		return(
			<Container fluid className="n-cont">
				<Row>
					<Header title={this.props.pages_opt.news.title} subtitle={this.props.pages_opt.news.subtitle} icon={faNewspaper}/>
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
											<Container as="div" bsPrefix="n-disp">
												{isArrayEntry ? (
														<ListEntry/>
													) : (
														<React.Fragment>
															<Container as="div" bsPrefix="n-detail-list">
																<React.Fragment>
																	{!this.props.isSearch ? (
																			data.map((item, index) => {
																				return (
																					<NewsItem key={index.toString()}
																						id={(index + 1).toString()}
																						title={item.title}
																						category={item.category}
																						text={item.descriptor}
																						image={item.bg_image}
																						url={item.url}
																						date={item.date}
																						setNewsIndex={setNewsIndex}/>
																				)
																			})
																		) : (
																			<SelectedNewItem title={data[selectedIndex].title}
																				category={data[selectedIndex].category}
																				descriptor={data[selectedIndex].descriptor}
																				image={data[selectedIndex].bg_image}
																				list_image={data[selectedIndex].list_image}
																				logo={data[selectedIndex].logo}
																				original_url={data[selectedIndex].original_url}
																				date={data[selectedIndex].date}/>
																		)
																	}
																</React.Fragment>
															</Container>
															<Container as="div" bsPrefix="n-long-list">
																{
																	data.map((item, index) => {
																		return (
																			<LongNewsItem key={index.toString()}
																				id={(index + 1).toString()}
																				title={item.title}
																				category={item.category}
																				data={item.date}
																				setNewsIndex={setNewsIndex}/>
																		)
																	})
																}
															</Container>
															</React.Fragment>
													)
												}
											</Container>
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
		pages_opt: state.PagesReducer,
		news_reducer: state.NewsReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		newsActions: bindActionCreators(newsActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)