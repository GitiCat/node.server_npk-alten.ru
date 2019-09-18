import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class AlbumItem extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {

		const { bg_image, name, title, descriptor, current_url } = this.props

		return (
			<Container as='div' bsPrefix='album-cont'>
				<Link to={`${current_url}/${name}`} className="album-cont-block">
					<Container as='div' bsPrefix='album-cont-block__bg-image' style={{backgroundImage: 'url(' + bg_image + ')'}}></Container>
					<Container as='div' bsPrefix='album-cont-block__content'>
						<Container as='div' bsPrefix='album-cont-block__content__title'>
							<span>{title}</span>
						</Container>
						<Container as='div' bsPrefix='album-cont-block__content__descriptor' dangerouslySetInnerHTML={{__html: descriptor}}></Container>
					</Container>
				</Link>
			</Container>
		)
	}
}

export default AlbumItem