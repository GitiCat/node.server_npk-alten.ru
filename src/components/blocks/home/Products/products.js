import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import ListEntry from "../../list-entry/listEntry"
import Loading from "../../loading-data/loading"
import Loadingerror from "../../loading-error/loading-error"

class Products extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			category: [],
			isLoading: true,
			errors: false,
			errorMessage: null
		}
	}


	componentDidMount() {
		this.loadProducts();
	}

	async loadProducts() {
		let result = await fetch("/api/v0/products-category/")
			.then(response => {
			if(response.status !== 200) {
				this.setState({
					errors: true,
					errorMessage: "В процессе загрузки данных возникла ошибка. Код статуса: " + response.status,
					isLoading: false
				})
			}

			return response.json()
		})

		if(this.state.errors == false) {
			this.setState({
				category: result,
				isLoading: false
			})
		}
	}

	render() {

		const { category, isLoading, errors, errorMessage } = this.state;
		console.log(category, isLoading, errors, errorMessage);

		return (
			<Container fluid className="pd-cont">
				<Row>
					<Container as="div" bsPrefix="pd-cont-top">
						<Container as="div" bsPrefix="top-title ms-title-h2
							revealator-slidedown revealator-once revealator-delay1">
							<h2>
								<span>
									{this.props.reducer.products.title}
								</span>
							</h2>
						</Container>
						<Container as="div" bsPrefix="top-desc ms-desc-1
							revealator-slidedown revealator-once revealator-delay2">
							<p>
								{this.props.reducer.products.desc}
							</p>
						</Container>
					</Container>
				</Row>
				{isLoading ? (
						<Loading/>
					) : (
						<Row className="justify-content-center">
							{errors ? (
									<LoadingError error_message={errorMessage}/>
								) : (
									<React.Fragment>
										{category.lenght == 0 ? (
												<ListEntry/>
											) : (
												<React.Fragment>
													{category.map((item, index) => {
														return (
															<Col key={index.toString()} lg={3} md={6} sm={12} xs={12}>
																<Container as="div" bsPrefix="cat-cont revealator-zoomout revealator-once" className={'revealator-delay' + (parseInt(index.toString()) + 1).toString()}>
																	<Container as="div" bsPrefix="cat-img" style={{backgroundImage: 'url(' + item["bg_image"] + ')'}}>
																		<Container as="div" bsPrefix="cat-desc-hover">
																			<Container as="div" bsPrefix="cat-desc-content">
																				<Container as="div" bsPrefix="cat-desc-title">
																					<span>
																						{
																							item["title"]
																						}
																					</span>
																				</Container>
																				<Container as="div" bsPrefix="cat-desc-link">
																					<Link to="#">Перейти...</Link>
																				</Container>
																			</Container>
																		</Container>
																	</Container>
																</Container>
															</Col>
														)
													})
												}
												</React.Fragment>
											)
										}
									</React.Fragment>
								)
							}
						</Row>
					)
				}
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		reducer: state.HomeReducer
	}
}

export default connect(mapStateToProps)(Products);