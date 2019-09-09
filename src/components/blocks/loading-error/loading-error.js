import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const LoadingError = ({error_message}) => (
	<Container as="div" bsPrefix="loading-error-block">
		<span>
			{error_message}
		</span>
	</Container>
)

export default LoadingError;