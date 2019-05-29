import React from "react"
import {Link} from "react-router-dom"
import {Container, Row, Col} from "react-bootstrap";
import MenuBlock from "../menu/menu";

class FooterComponent extends React.Component {
    render() {
        return (
            <Container as="footer" bsPrefix="footer" id="footer" >
                <Container>
                    <Row className="d-flex">
                        <Col className="footer__item footer__item_company col-lg-4 col-md-12 col-sm-12 col-12">
                            <h6 className="text-uppercase font-weight-bold">
                                АО НПК АЛЬТЭН
                            </h6>
                            <hr id="footer__element-separator"/>
                            <p>
                                Акционерное общество «Научно-производственный комплекс «Альтэрнативная энергетика»
                            </p>
                        </Col>
                        <Col className="footer__item col-lg-2 col-md-4 col-sm-4 col-12 ml-auto">
                            <h6 className="text-uppercase font-weight-bold">
                                Предприятие
                            </h6>
                            <hr id="footer__element-separator"/>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="company/leadership">Руководство</Link>
                                </li>
                                <li>
                                    <Link to="company/patents">Паттенты</Link>
                                </li>
                                <li>
                                    <Link to="company/gallery">Галерея</Link>
                                </li>
                            </ul>
                        </Col>
                        <Col className="footer__item col-lg-2 col-md-4 col-sm-4 col-12">
                            <h6 className="text-uppercase font-weight-bold">
                                Карта сайта
                            </h6>
                            <hr id="footer__element-separator"/>
                            <ul className="list-unstyled">
                                <MenuBlock/>
                            </ul>
                        </Col>
                        <Col className="footer__item col-lg-4 col-md-4 col-sm-4 col-12">
                            <h6 className="text-uppercase font-weight-bold">
                                Контакты
                            </h6>
                            <hr id="footer__element-separator"/>
                            <ul className="list-unstyled">
                                <li className="d-flex">
                                    <div>Телефон: <a href="tel:84999951789">+7 (499) 995-17-89</a></div>
                                </li>
                                <li className="d-flex">
                                    <div>Факс / телефон: <a href="tel:84992406412">+7 (499) 240-64-12</a></div>
                                </li>
                                <li className="d-flex">
                                    <div>Адрес: <a href="https://yandex.ru/maps/21642/elektrougli/?z=17&ll=38.206184%2C55.724726&l=map&origin=jsapi_2_1_68&from=api-maps&mode=whatshere&whatshere%5Bpoint%5D=38.204875%2C55.723554&whatshere%5Bzoom%5D=17">
                                        142455 Московская область, Центральная улица, 59
                                    </a></div>

                                </li>
                                <li className="d-flex">
                                    <a href="mailto:info@npk-alten.ru">
                                        info@npk-alten.ru
                                    </a>
                                </li>
                                <li className="d-flex">
                                    <a href="https://npk-alten.ru">npk-alten.ru - официальный сайт АО НПК АЛЬТЭН </a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="copyright">
                    <div>Copyright &copy; <span id="copyright__text"></span> Все права защищены.</div>
                </div>
            </Container>
        );
    }
}

export default FooterComponent