import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import NewsBlock from "./news-block";
import axios from "axios"

class NewsContainer extends React.Component {

	constructor(props) {
		super(props)
		state = {
			data: []
		}
	}

	componentDidMount() {
		getData();
	}

	getData() {
		axios.get(`${axios.defaults.baseURI}/api/getNews`)
		.then(result => {
			const data = result.data;
			this.setState({data});
		})
	}

	render() {

		console.log(this.state.data);
		const { data } = this.state;

		return(
			<Container fluid className="news-cont">
				<Row>
					<Container as="div" bsPrefix="news-title ms-title-h2">
						<h2>
							<span>
								{this.props.news.title}
							</span>
						</h2>
					</Container>
				</Row>
				<Row>
					<Container as="div" bsPrefix="news-subtitle ms-desc-1">
						<p>
							{this.props.news.subtitle}
						</p>
					</Container>
				</Row>
				<Row>
					<Container as="div" bsPrefix="news-content">
						<Container as="div" bsPrefix="block-cont">
							{ data.length !== 0 &&
								data.map((item, index) => {
									<NewsBlock id={index.toString()}
										title={item.title}
										desc={item.desc}
										category={item.category}
										imgUrl={item.imgUrl}
										logo={item.logo}
										url={item.url}/>
								})
							}
						</Container>
					</Container>
				</Row>
			</Container>
		)
	}
}

function mapPropsToState(props) {
	return {
		news: state.HomeReducer
	}
}

export default connect(mapPropsToState)(NewsContainer);