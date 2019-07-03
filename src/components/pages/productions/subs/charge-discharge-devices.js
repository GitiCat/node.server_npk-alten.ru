import React from 'react' 
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';

class ChargeDischargeDevices extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            data: [],
            message: "",
        }
    }

    componentDidMount() {
        this.getData();
    }

    componentWillMount() {
    	this.setHeaderActive();
    }

    componentWillUnmount() {
    	this.setHeaderActive();
    }

    getData() {
        fetch('/api/getProduction', {
        	headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(response => this.setState({data: response}));
    }

    setHeaderActive() {
    	let header = document.querySelector('.header');
    	let m_header = document.querySelector('.ham');

    	header.classList.toggle('d-none');
    	m_header.classList.toggle('d-block');
    }

	render() {

		const { data } = this.state;
		console.log(this);

		return(
			<Container bsPrefix="container-production-catalog-page">
				<Container as="div" bsPrefix="production-catalog-list">
					{data.length !== 0 && 
						data["prod"]["zru"].map((item, index) => {
							return (
								<input type="radio" className="slide-input-buttons" id={'slide-input-' + index} name="bg-input"/>
							)
						})
					}
					{data.length !== 0 &&
						data["prod"]["zru"].map((item, index) => {
							return (
								<Container as="div" bsPrefix="production-catalog-list--item__container">
									<label for={'slide-input-' + index} className="slide-check-label">
										<Container as="div" bsPrefix="production-catalog-list--item"
											style={{backgroundImage: "url(../../../../../public/images/" + item.prod_images + ")"}}>
											<Container as="div" bsPrefix="item--background-hover"></Container>
											<Container as="div" bsPrefix="item--title">
												{item.prod_name}
											</Container>
										</Container>
									</label>
								</Container>
							)
						})
					}
				</Container>
				<Container fluid className="production-catalog-display">
					{data.length !== 0 && 
						data["prod"]["zru"].map((item, index) => {
							return (
								<Container fluid className="catalog-display--item">
									<Container as="div" bsPrefix="p-catalog-display--item__title-block">
										<Row>
											<Col lg={6} md={12} sm={12} xs={12}>
												<Container as="div" bsPrefix="p-catalog-display--item__title">
													{item.prod_name}
												</Container>
											</Col>
											<Col lg={6} md={12} sm={12} xs={12} className="d-flex align-items-center
												justify-content-lg-end justify-content-md-start
												justify-content-sm-start justify-content-start">
												<Container as="div" bsPrefix="p-catalog-display--item__category-name">
													{item.prod_category_name}
												</Container>
											</Col>
										</Row>
									</Container>
									<Row>
										<Container as="div" bsPrefix="gradient-line-separator"></Container>
									</Row>
									<Container as="div" bsPrefix="p-catalog-display--item__info-block">
										<Row>
											<Col lg={6} md={12} sm={12} xs={12}>
												<Container as="div" bsPrefix="item__info-block--information">
													<Row>
														<Container as="div" bsPrefix="item__info-block--descriptor">
															<div dangerouslySetInnerHTML={{__html: item["prod_descriptor"]}}></div>
														</Container>
													</Row>
													<Row>
														<Container as="div" bsPrefix="item__info-block--parameters">
															{item["prod_properties"] !== null 
																? <div dangerouslySetInnerHTML={{__html: item["prod_properies"]}}></div>
																: <LackInformation descriptor="Информация о разделе 'Параметры устройства' отсутствует..."/>
															}
														</Container>
													</Row>
													<Row>
														<Container as="div" bsPrefix="item__info-block--files container">
															<Row>
																<Container as="div" bsPrefix="info-block--files__title">
																	Файлы для закачки
																</Container>
															</Row>
															<Row>
																<Container as="div" bsPrefix="info-block--files__list">
																	<ul>
																		{item["prod_files"] !== null 
																			? SplitString(item["prod_files"], ", ").map((item, index) => {
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
													style={{backgroundImage: "url(../../../../../public/images/" + item.prod_images + ")"}}></Container>
											</Col>
										</Row>
									</Container>
								</Container>
							)
						})
					}
				</Container>
			</Container>
		);
	}
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

export default ChargeDischargeDevices;