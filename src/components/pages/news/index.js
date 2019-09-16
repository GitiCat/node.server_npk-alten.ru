import React from 'react'

import NewsList from '../../../containers/news/news'

export default class News extends React.Component {
	render() {
		return(
			<NewsList isSearch={this.props.match.params.id == null ? false : true}
				index={this.props.match.params.id}/>
		)
	}
} 