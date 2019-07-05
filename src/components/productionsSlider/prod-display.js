import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const ProductionDisplay = ({data = [], id}) => (
	<Container fluid className="production-catalog-display">
		<Container fluid className="catalog-display--item">
			<Row>
				<Container as="div" bsPrefix="p-catalog-display--item__title-block">
					<Row>
						<Col lg={6} md={12} sm={12} xs={12}>
							<Container as="div" bsPrefix="p-catalog-display--item__title">
								{data[id]["prod_name"]}
							</Container>
						</Col>
						<Col lg={6} md={12} sm={12} xs={12} className="d-flex align-items-center
							justify-content-lg-center">
							<Container as="div" bsPrefix="p-catalog-display--item__category-name">
								{data[id].prod_category_name}
							</Container>
						</Col>
					</Row>
				</Container>
			</Row>
			<Row>
				<Container as="div" bsPrefix="gradient-line-separator"></Container>
			</Row>
			<Row>
				<Container as="div" bsPrefix="p-catalog-display--item__info-block">
					<Row>
						<Col lg={6} md={12} sm={12} xs={12} className="mp-0">
							<Container as="div" bsPrefix="item__info-block--information">
								<Row>
									<Container as="div" bsPrefix="item__info-block--descriptor">
										<div dangerouslySetInnerHTML={{__html: data[id]["prod_descriptor"]}}></div>
									</Container>
								</Row>
								<Row>
									<Container as="div" bsPrefix="item__info-block--parameters">
										{data[id]["prod_properties"] !== null 
											? <div dangerouslySetInnerHTML={{__html: data[id]["prod_properties"]}}></div>
											: <LackInformation descriptor="Информация о разделе 'Параметры устройства' отсутствуют..."/>
										}
									</Container>
								</Row>
								<Row>
									<Container as="div" bsPrefix="item__info-block--files container">
										<Row>
											<Container as="div" bsPrefix="info-block--files__title">
												Файлы для загрузки
											</Container>
										</Row>
										<Row>
											<Container as="div" bsPrefix="info-block--files__list">
												<ul>
													{data[id]["prod_files"] !== null
														? SplitString(data[id]["prod_files"], ", ").map((item, index) => {
															return(
																<li key={index.toString()}>
																	<Link to="">{item}</Link>
																</li>
															)
														})
														: <LackInformation descriptor="Файлы для загрузки отсутствуют..."/>
													}
												</ul>
											</Container>
										</Row>
									</Container>
								</Row>
							</Container>
						</Col>
						<Col lg={6} md={12} sm={12} xs={12} className="d-flex justify-content-center">
							<Container as="div" bsPrefix="item__info-block--image"
								style={{backgroundImage: "url(../../../../../public/images/" + data[id]	.prod_images + ")"}}></Container>
						</Col>
					</Row>
				</Container>
			</Row>
		</Container>
	</Container>
)

function logger(data, id) {
	console.log(data, id);
}

{/* Block informing about the lack of information */}
function LackInformation(props) {
	return(
		<Container as="div" bsPrefix="lack-information-block">
			{props.descriptor}
		</Container>
	)
}

function SplitString(stringToSclit, separator) {
	if(stringToSclit === null) 
		return null;
		
	let arrayOfString = stringToSclit.split(separator);

	return arrayOfString;
}

const mapStateToProps = (state) => ({
	currentProductId: state.getSelectProductId
})

export default connect(mapStateToProps)(ProductionDisplay)