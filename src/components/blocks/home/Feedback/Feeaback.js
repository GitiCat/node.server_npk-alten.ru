import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import {connect} from "react-redux"
import {faUser, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"

import YandexMap from "../Map/YandexMap"
import MaterialInput from "../../../elements/MaterialInput/MaterialInput"

class Feedback extends React.Component {
    render() {  
        return(
            <Container fluid className="feedback-container">
                <Row>
                    <Col lg={6} md={12} sm={12} xs={12} className="feedback-cols">
                        <YandexMap/>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} className="feedback-cols">
                        <Container as="div" bsPrefix="feedback-form__container">
                            <Row>
                                <h2>
                                    Обратная связь
                                </h2>
                            </Row>
                            <Row>
                                <h4>
                                    Возник вопрос? Отправьте его нам и с Вами обязательно свяжутся!
                                </h4>  
                            </Row>
                            <Row>
                                <Container as="div" className="feedback-form__input-fuelds">
                                    <form>
                                        <MaterialInput id="full-name__id" name="full-name" icon={faUser} type="text" placeholder="Ваше имя" labText="Имя"/>
                                        <Container as="div" bsPrefix="horizontal-elements">
                                            <MaterialInput id="phone__id" name="phone" icon={faPhone} type="tel" placeholder="Телефон" labText="Телефон"/>
                                            <MaterialInput id="email__id" name="email" icon={faEnvelope} tyle="email" placeholder="Электронная почта" labText="Почта"/>
                                        </Container>
                                        <label className="feedback--text__label">
                                            Опишите свой вопрос
                                            <textarea>
                                                
                                            </textarea>
                                        </label>
                                        <input className="submit-button" type="submit" value="Отправить"/>
                                    </form>
                                </Container>    
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect()(Feedback);