import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";

import LifeCycleItems from "../LifeCycle/lifeCycleItems";

class LifeCycleBlock extends React.Component {
    render() {
        return(
            <Container fluid className="life-cycle__container">
                
                <LifeCycleItems/>

                {/* Absolute position container svg points */}
                <Container as="div" bsPrefix="life-cycle__point--container d-flex justify-content-center">
                    <svg>
                        <line/>
                    </svg>
                </Container>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        homeComponents: state.HomeReducer
    }
}

export default connect(mapStateToProps)(LifeCycleBlock);