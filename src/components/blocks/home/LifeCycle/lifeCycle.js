import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import {connect} from "react-redux";

import LifeCycleItems from "../LifeCycle/lifeCycleItems";

class LifeCycleBlock extends React.Component {

    constructor(props) {
        super(props);

        this.initialParallaxImages = this.initialParallaxImages.bind(this);
        this.scrollingParallaxImages = this.scrollingParallaxImages.bind(this);
    }

    initialParallaxImages() {
        let scrolled = $(window).scrollTop();

        $(".parallax-image-container").each(function(index) {
            let imageUrl = $(this).data("image-url");
            let imageHeight = $(this).data("height");
            $(this).css("backgroundImage", "url(" + imageUrl + ")");
            $(this).css("height", imageHeight);

            let YPosition = $(this).offset().top;
            let eHeight = $(this).height();

            let diff = scrolled - YPosition;
            let ratio = Math.round((diff / eHeight) * 100);

            $(this).css("backgroundPosition", "center " + parseInt(-(ratio * 1.5)) + "px");
        })
    }

    scrollingParallaxImages() {
        let scrolled = $(window).scrollTop();

        $(".parallax-image-container").each(function(index, element) {
            let YPosition = $(element).offset().top;
            let height = $(element).height();
            let endYPosition = YPosition + $(element).height();

            let diff = scrolled - YPosition;
            let ratio = Math.round((diff / height) * 100)

            $(element).css('backgroundPosition', 'center ' + parseInt(-(ratio * 1.5)) + 'px');
        })
    }

    componentDidMount() {
        $(document).ready( () => this.initialParallaxImages());
        $(window).scroll( () => this.scrollingParallaxImages());
    }

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