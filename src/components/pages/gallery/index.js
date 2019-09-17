import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { faImages } from "@fortawesome/free-solid-svg-icons"

import Header from '../../blocks/header/header'
import Loading from '../../blocks/loading-data/loading'
import LoadingError from '../../blocks/loading-error/loading-error'
import ListEntry from '../../blocks/list-entry/listEntry'

class Gallery extends React.Component {

	render() {
		console.log(this.props)
		return (
			<Container as="div" bsPrefix="gallery-cont">
				<Row>
					<Header title={this.props.pages_opt.gallery.title} subtitle={this.props.pages_opt.gallery.subtitle} icon={faImages}/>
				</Row>
				<Row>
					
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