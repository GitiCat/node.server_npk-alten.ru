import React from "react"
import {Container, Row, Col} from "react-bootstrap"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PageHeader = ({title, subtitle, icon}) => (
    <Container as="div" bsPrefix="header" id="header">
        <Container as="div" bsPrefix="h-content">
            <Container as="div" bsPrefix="h-c-title">
                <h2>
                    {title}
                </h2>
            </Container>
            <Container as="div" bsPrefix="h-c-subtitle">
                <span>
                    {subtitle}
                </span>
            </Container>
        </Container>
        <FontAwesomeIcon icon={icon} className="h-icon"/>
    </Container>
)

export default PageHeader;