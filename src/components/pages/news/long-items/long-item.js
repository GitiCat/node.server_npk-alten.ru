import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class LongNewsItem extends React.Component {

	render() {

		const { id, title, category, data } = this.props;

		return (
			<Container as="div" bsPrefix="long-n-cont border--dotted">
				<Link to={`/news/${id}`}>
					<Container as="div" bsPrefix="long-n_title">
						<span>{title}</span>
					</Container>
					<Container as="div" bsPrefix="long-n_category">
						<span>{data}</span>
					</Container>
				</Link>
			</Container>
		)
	}
}

export default LongNewsItem