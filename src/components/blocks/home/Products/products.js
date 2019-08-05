import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

class Products extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			data: [],
			errors: null,
			isLoading: true
		}
	}


	componentDidMount() {
		this.getData();
	}

	getData() {
		fetch('/api/getProduction', {
        	headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(response => this.setState({data: response}));
	}

	render() {

		const { data } = this.state;
		console.log(data);

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
				{data.length !== 0 &&
					<Row className="justify-content-center">
						{
							data["cat"].map((item, index) => {
								return (
									<Col key={index.toString()} lg={3} md={6} sm={12} xs={12}>
										<Container as="div" bsPrefix="cat-cont revealator-zoomout revealator-once" className={'revealator-delay' + (parseInt(index.toString()) + 1).toString()}>
											<Container as="div" bsPrefix="cat-img" style={{backgroundImage: 'url(../../../../../public/images/' + item["category_img"] + ")"}}>
												<Container as="div" bsPrefix="cat-desc-hover">
													<Container as="div" bsPrefix="cat-desc-content">
														<Container as="div" bsPrefix="cat-desc-title">
															<span>
																{
																	item["category_title"]
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
					</Row>
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