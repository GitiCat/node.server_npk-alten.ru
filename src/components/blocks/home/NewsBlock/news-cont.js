import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import NewsBlock from "./news-block";
import axios from "axios"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper } from "@fortawesome/free-solid-svg-icons"

class NewsContainer extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [],
			errors: null,
			isLoading: false
		}
	}

	componentWillMount() {
		this.getData();
	}

	getData() {
		axios({
			method: "get",
			responseType: "json",
			url: "/api/getNews"
		})
		.then(response => {
			this.setState({
				data: response.data,
				isLoading: false
			})
		})
		.catch(error => {
			this.setState({
				errors: error,
				isLoading: false
			})
		})
	}

	render() {

		const { data, isLoading } = this.state;

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
					<Container as="div" bsPrefix="news-content">
						<Container as="div" bsPrefix="block-cont">
							{ !isLoading &&
								data.map((item, index) => {
									return(
										<NewsBlock key={index.toString()}
										title={item.title}
										desc={item.desc}
										category={item.category}
										date={item.date_n}
										imgUrl={item.bg_url}
										logo={item.logo}
										url={item.url}
										original_url={item.original_url}/>
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
		news: state.HomeReducer
	}
}

export default connect(mapStateToProps)(NewsContainer);