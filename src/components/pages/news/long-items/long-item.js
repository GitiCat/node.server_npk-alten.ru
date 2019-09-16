import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LongNewsItem extends React.Component {

	constructor(props) {
		super(props)
		this.onLinkClick = this.onLinkClick.bind(this)
	}

	onLinkClick(event) {
		let index = event.target.dataset.newsId;
		this.props.setNewsIndex(index)
	}

	render() {

		const { id, title, category, data } = this.props;

		return (
			<Container as="div" bsPrefix="long-n-cont border--dotted">
				<Link to={{
					pathname: `/news/${id}`
				}} data-news-id={id} onClick={this.onLinkClick}></Link>
				<Container as="div" bsPrefix="long-n_title">
					<span>{title}</span>
				</Container>
				<Container as="div" bsPrefix="long-n_category">
					<span>{data}</span>
				</Container>
			</Container>
		)
	}
}

export default LongNewsItem