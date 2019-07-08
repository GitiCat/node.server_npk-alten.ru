import React from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";

import InformationBlock from "../../blocks/home/information"
import ServicesBlock from "../../blocks/home/services"
import LifeCycleBlock from "../../blocks/home/LifeCycle/lifeCycle"
import Feedback from "../../blocks/home/Feedback/Feeaback"

class Home extends React.Component {

    initParallaxImage() {
        $('.image-parallax').each(function() {
            let image = $(this);
            let imageParent = $(this).parent();
            

            $(document).on('scroll', function() {
                let speed = image.data('speed');
                let imgY = imageParent.offset().top;
                let winY = $(this).scrollTop();
                let winH = $(this).height();
                let parentH = imageParent.innerHeight();

                let winBotton = winY + winH;
                let imgPercent;

                console.log(winBotton, imgY, winY, parentH, winBotton > imgY, winY < imgY + parentH);
                if(winBotton > imgY && winY < imgY + parentH) {
                    let imgBotton = ((winBotton - imgY) * speed);
                    let imgTop = winH + parentH;
                    imgPercent = ((imgBotton / imgTop) * 100) + (50 - (speed * 50));
                }
                image.css({
                    top: imgPercent + '%',
                    transform: 'translate(-50%, -' + imgPercent + '%)'
                });
            })
        });
    }

    componentDidMount() {
        this.initParallaxImage();
    }
    
    render() {
        return(
            <div className="home-page">
                <div className="space-photo">
                    <canvas id="dynamic-point">&nbsp;</canvas>
                    <Container fluid className="title-container">
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="title-text-middle">Научно-производственный комплекс</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="title-text-high">Альтэрнативная энергетика</div>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12}>
                                <div className="subtitle-text">
                                    Разработка и производство химических источников тока
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <div className="start-button-container">
                        <Link to="/" className="start-button-link">
                            <FontAwesomeIcon icon={faAngleDown} className="start-button-icon" />
                        </Link>
                    </div>
                </div>
                <Container as="div" bsPrefix="home-page-content">

                    {/* Company information block */}
                    <InformationBlock/>
                    {/* Company services block */}
                    <ServicesBlock/>
                    {/* Productions life cycle block */}
                    <LifeCycleBlock/>
                    {/* Yandex maps and feedback form */}
                    <Feedback/>

                </Container>
            </div>
        );
    }
}

export default Home;