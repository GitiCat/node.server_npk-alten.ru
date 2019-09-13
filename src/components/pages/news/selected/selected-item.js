import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SelectNewsItem extends React.Component {

	render() {

		const { title, category, descriptor, image, list_image, logo, original_url, date } = this.props

		return (
			<Container as="div" bsPrefix="selected-news__container">
				<Container as="div" bsPrefix="selected-news__image-slider">
					{/* Слайдер изображений */}
				</Container>
				<Container as="div" bsPrefix="selected-news__title">
					<span>{ title }</span>
					<Container as="div" bsPrefix="title__category-date">
						<span>{ category }</span>
						<span>{ date }</span>
					</Container>
				</Container>
				<Container as="div" bsPrefix="selected-item__content">
					<Container as="div" bsPrefix="content__image" style={{backgroundImage: 'url(' + image + ')'}}></Container>
					<Container as="div" bsPrefix="content__text" dangerouslySetInnerHTML={{__html: text}}></Container>
					{ 

					}
				</Container>
			</Container>
		)
	}
}

export default SelectNewsItem