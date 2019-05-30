import React from "react"
import {connect} from "react-redux"
import {Container, Row, Col} from "react-bootstrap"
import PropTypes from 'prop-types';

class LifeCycleItems extends React.Component {

    isEven(someNumber) {
        return(someNumber % 2 == 0) ? true : false;
    }

    setReversClasses(someNumber) {
        if(this.isEven(someNumber))
            return '';
        
        let classesList = [
            'revers-row',
            'revers-position__img',
            'revers-position__text'
        ]

        return classesList;
    }

    createCycleItems() {
        return this.props.cycles.map((cycle) => {
            return (
                <Row data-row-index={cycle.id} className={this.setReversClasses(cycle.id)[0]}>
                    <Col lg={6} md={5} sm={5} xs={5} className="life-cycle__col">
                        <Container as="div" bsPrefix="life-cycle__text--container text-right" className={this.setReversClasses(cycle.id)[2]}>
                            <Container as="div" bsPrefix="life-cycle__item--title">
                                {cycle.title}
                            </Container>
                            {
                                cycle.descriptor.map((desc) => {
                                    return (
                                        <Container as="div" bsPrefix="life-cycle__item--descriptor">
                                            {desc.paragraph}
                                        </Container>
                                    );
                                })
                            }
                        </Container>
                    </Col>
                    <Col lg={6} md={5} sm={5} xs={5}>
                        <Container as="div" bsPrefix="life-cycle__image-container text-left" className={this.setReversClasses(cycle.id)[1]}>
                            <Container as="div" bsPrefix="life-cycle__image" id={'cycle-img__' + cycle.name}>
                            </Container>
                        </Container>
                    </Col>
                </Row>
            );
        });
    }

    render() {
        console.log(this.props.cycles);
        return (
            <div>
                {this.createCycleItems()}
            </div>
        )
    }
}

LifeCycleItems.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    descriptor: PropTypes.array
}

function mapStateToProps(state) {
    return {
        cycles: state.LifeCycleReducer
    }
}

export default connect(mapStateToProps)(LifeCycleItems);