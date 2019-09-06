import React from "react"
import { Container } from "react-bootstrap"

{/* empty alert component class */}
class ListEntry extends React.Component {

	render() {
		return (
			<Container fluid className="l-entry">
				<span>
					Список объектов пуст
				</span>
			</Container>
		)
	}
}

export default ListEntry;