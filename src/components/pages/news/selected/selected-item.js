import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SelectNewsItem extends React.Component {

	constructor(props) {
		super(props)
		this.redirectLinkClick = this.redirectLinkClick.bind(this)
	}

	redirectLinkClick(event) {
		event.preventDefault()
		let urlToRegirect = event.target.href
		window.open(urlToRegirect, "_parent", false)
	}

	render() {

		const { title, category, descriptor, image, list_image, logo, original_url, date } = this.props

		return (
			<Container as="div" bsPrefix="selected-news__container">
				<Container as="div" bsPrefix="selected-news__image-slider">
					<React.Fragment>
						{list_image == null ? (
								<Container as="div" bsPrefix="img" style={{backgroundImage: 'url(' + image + ')'}}/>
							) : (
								<Container as="div" bsPrefix="img_slider">
									Тут будет слайдер
								</Container>
							)
						}
					</React.Fragment>
				</Container>
				<Container as="div" bsPrefix="selected-news__top">
					<Container as="div" bsPrefix="top__title">
						<span>{ title }</span>
						<Container as="div" bsPrefix="title__category-date">
							<span>{ category }</span>
							<span>{ date }</span>
						</Container>
					</Container>
					{logo !== null &&
						<Container as="div" bsPrefix="content__logo" style={{backgroundImage: 'url(' + logo + ')'}}/>
					}
				</Container>
				<Container as="div" bsPrefix="selected-news__content">
					<Container as="div" bsPrefix="content__text" dangerouslySetInnerHTML={{__html: descriptor}}></Container>
					<Container as="div" bsPrefix="content__urls">
						{original_url !== null &&
							<Link to={{
								pathname: original_url
							}} onClick={this.redirectLinkClick}>Ссылка на оригинальную статью</Link>
						}
					</Container>
				</Container>
			</Container>
		)
	}
}

export default SelectNewsItem