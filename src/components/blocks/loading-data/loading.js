import React from "react"
import { Container } from "react-bootstrap"

class Loading extends React.Component {

	render() {

		return (
			<Container as="div" bsPrefix="loading-pfx">
				<span>
					Loading...
				</span>
			</Container>
		)
	}
}

export default Loading;