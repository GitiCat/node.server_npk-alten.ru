import React from "react"
import {connect} from "react-redux"
import {Container, Row, Col} from "react-bootstrap"
import PropTypes from 'prop-types';

const Vivus = require("vivus");

class LifeCycleItems extends React.Component {

    componentDidMount() {
        require("../../../../../public/scripts/fm.revealator.jquery.js");

        $(".c-i-bl-image").each( (index, element) => {
            let imgUrl = $(element).data("img-url");
            new Vivus(element, {
                file: imgUrl,
                duration: 100,
                delay: 30
            });
        });
    }

    isEven(someNumber) {
        return(someNumber % 2 == 0) ? true : false;
    }

    setReversClasses(someNumber) {
        if(this.isEven(someNumber))
            return '';
        
        let classesList = [
            'revers-row',
            'revers-text',
            'revers-container',
            'revers-before',
            'revers-img'
        ]

        return classesList;
    }

    createCycleItems() {
        return this.props.cycles.map((cycle, index) => {
            return (
                <Row key={index.toString()} className="parallax-bg" data-bg-img-url={cycle.bg_image}>
                    <Container as="div" bsPrefix="block-mask"></Container>
                    <Container as="div" bsPrefix="life_item-container"
                        className={this.setReversClasses(index.toString())[0]}>
                        <Container as="div" bsPrefix="c-text-block">
                            <Container as="div" bsPrefix="c-bl-mask"></Container>
                            <Container as="div" bsPrefix="c-bl-content" className={this.setReversClasses(index.toString())[2]}>
                                <Container as="div" bsPrefix="c-bl-ct-title revealator-slideright revealator-delay2 revealator-once">
                                    <h2 className={this.setReversClasses(index.toString())[3]}>
                                        <span className={this.setReversClasses(index.toString())[1]}>{cycle.title}</span>
                                    </h2>
                                </Container>
                                <Container as="div" bsPrefix="c-bl-ct-paragraph">
                                    {cycle.descriptor.map((item, i) => {
                                        return (
                                            <p key={i.toString()} className={this.setReversClasses(index.toString())[1] + " revealator-slideright revealator-delay2 revealator-once"}>
                                                {item.paragraph}
                                            </p>
                                        )
                                    })}
                                </Container>
                            </Container>
                        </Container>
                        <Container as="div" bsPrefix="c-img-block">
                            <Container as="div" bsPrefix="img-mask"></Container>
                            <Container as="div" bsPrefix="c-i-bl-image" data-img-url={cycle.svg_image}></Container>
                        </Container>
                    </Container>
                </Row>
            );
        });
    }

    render() {
        return (
            <React.Fragment>
                {this.createCycleItems()}
            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        cycles: state.LifeCycleReducer
    }
}

export default connect(mapStateToProps)(LifeCycleItems);