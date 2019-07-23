import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import { Link } from "react-router-dom"
import {connect} from "react-redux"
import {faUser, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons"

import YandexMap from "../Map/YandexMap"
import MaterialInput from "../../../elements/MaterialInput/MaterialInput"

class Feedback extends React.Component {
    render() {  
        return(
            <Container fluid className="fb-cont">
                <Row>
                   <Container as="div" bsPrefix="fb-content">
                        <Container as="div" bsPrefix="ms-title-h2">
                            <h2>
                                <span>
                                    Остались вопросы?
                                </span>
                                <span>
                                    Оставьте заявку!
                                </span>
                            </h2>
                        </Container>
                        <Container as="div" bsPrefix="ms-desc-1">
                            <p>
                                Вы можете заполнить форму обратной связи и мы обязательно, в скором времени ответим!
                                Кнопка вызова формы находится в правом верхнем углу.
                            </p>
                        </Container>
                    </Container>
                    <Container as="div" bsPrefix="fb-desc">
                        <Container as="div" bsPrefix="ms-desc-1">
                            <p>
                                Так же, для более быстрой связи, вы можете позвонить нам по контактному номеру 
                            </p>
                            <Link to="tel:84999951789">+7 (499) 995-17-89</Link>
                        </Container>
                    </Container>
                </Row>
            </Container>
        );
    }
}

export default connect()(Feedback);