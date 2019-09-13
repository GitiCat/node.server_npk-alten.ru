import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

class NewsItem extends React.Component {

	constructor(props) {
		super(props)

		this.onLinkClick = this.onLinkClick.bind(this)
	}

	onLinkClick(event) {
		event.preventDefault()
		console.log(event.target)
		let index = event.target.dataset.newsId;
		this.props.setNewsIndex(index)
	}

	render() {	

		const { id, title, category, text, image, date } = this.props

		return (
			<Container as="div" bsPrefix="n-i-cont border--dotted">
				<Container as="div" bsPrefix="n-i-img-cont">
					<Container as="div" bsPrefix="n-i-img" style={{backgroundImage: 'url(' + image + (')')}}></Container>
				</Container>
				<Container as="div" bsPrefix="n-i-content">
					<Container as="div" bsPrefix="n-i-ct-top">
						<span>Роскосмос</span>
						<span>{date}</span>
					</Container>
					<Container as="div" bsPrefix="n-i-ct-block">
						<Container as="div" bsPrefix="title">
							<span>{title}</span>
						</Container>
						<Container as="div" bsPrefix="text" dangerouslySetInnerHTML={{__html: text}}></Container>
						<Link to={`/news/${id}`} data-news-id={id} onClick={this.onLinkClick}>Перейти</Link>
					</Container>
				</Container>
			</Container>
		)
	}
}

export default NewsItem;