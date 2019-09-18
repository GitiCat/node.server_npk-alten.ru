import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { faImages } from "@fortawesome/free-solid-svg-icons"

import Header from '../../blocks/header/header'
import Loading from '../../blocks/loading-data/loading'
import LoadingError from '../../blocks/loading-error/loading-error'
import ListEntry from '../../blocks/list-entry/listEntry'
import AlbumItem from './item/index'

class Gallery extends React.Component {

	constructor(props) {
		super(props)

		this.state = {
			data: [],
			isLoading: true,
			errors: false,
			errorMessage: null
		}
	}

	async componentDidMount() {
		let api_url = '/api/v0/albums/';
		let response = await this.loadAlbums(api_url);

		if(this.state.errors == false) {
			this.setState({
				data: response,
				isLoading: false
			});
		}
	}

	async loadAlbums(url) {
		let result = await fetch(url)
			.then(response => {
				if(response.status !== 200) {
					this.setErrorsStatus(response.status, response.statusText)
					return
				}

				return response.json()
			});
		return result;
	}

	setErrorsStatus(status_code, error_message) {
		let error_string = `В процессе загрузки возникла ошибка: ${error_message}. STATUS CODE: ${status_code}`;

		this.setState({
			isLoading: false,
			errors: true,
			errorMessage: error_string
		})
	}

	render() {

		const { pages_opt } = this.props
		const { data, isLoading, errors, errorMessage } = this.state

		return (
			<Container as="div" bsPrefix="gallery-cont">
				<Row>
					<Header title={pages_opt.gallery.title} subtitle={pages_opt.gallery.subtitle} icon={faImages}/>
				</Row>
				<Row>
					<Container as='div' bsPrefix='albums-cont'>
						<React.Fragment>
							{isLoading ? (
									<Loading/>
								) : (
									<React.Fragment>
										{errors ? (
												<LoadingError error_message={errorMessage}/>
											) : (
												<React.Fragment>
													{data.lenght == 0 ? (
															<ListEntry/>
														) : (
															data.map((item, index) => {
																return (
																	<AlbumItem bg_image="../../../../public/images/header-image.png"
																		name={item.name}
																		title={item.title}
																		descriptor={item.descriptor}
																		current_url={this.props.location.pathname}/>
																)
															})
														)
													}
												</React.Fragment>
											)

										}
									</React.Fragment>
								)

							}
						</React.Fragment>
					</Container>
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

export default connect(mapStateToProps)(Gallery)