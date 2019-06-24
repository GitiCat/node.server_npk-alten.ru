import React from 'react' 
import {Container, Row, Col} from 'react-bootstrap';

class ChargeDischargeDevices extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            data: []
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

		return(
			<Container bsPrefix="container-production-catalog-page">
				<Container as="div" bsPrefix="production-catalog-list">
					{data.length !== 0 && 
						data["prod"]["zru"].map(item => {
							return (
								<Container as="div" bsPrefix="production-catalog-list--item"
									style={{backgroundImage: "url(../../../../../public/images/" + item.prod_images + ")"}}>
									<Container as="div" bsPrefix="item--background-hover"></Container>
									<Container as="div" bsPrefix="item--title">
										{item.prod_name}
									</Container>
								</Container>
							)
						})
					}
				</Container>
				<Container fluid className="production-catalog-display">
					<Container as="div" bsPrefix="catalog-display--item">
						<Row className="justify-content-center">
							<Col lg={5} md={12} sm={12} xs={12}>
								<Container as="div" bsPrefix="item-display--element-name d-flex align-items-center">
									{data.length !== 0 && 
										data["prod"]["zru"][0]["prod_name"]
									}
								</Container>
							</Col>
							<Col lg={5} md={12} sm={12} xs={12} className="d-flex justify-content-lg-end
									justify-content-md-start justify-content-sm-start justify-content-start">
								<Container as="div" bsPrefix="item-display--category d-flex align-items-center">
									{data.length !== 0 && 
										data["cat"][2]["category_title"]
									}
								</Container>
							</Col>
						</Row>
						<Row>
							<Container fluid className="item-display--info-block"> 
								<Row>
									<Col lg={6} md={12} sm={12} xs={12}>
										<Container fluid className="info-block--1">
											<Row>
												<Container as="div" bsPrefix="info-block--descriptor">
													{data.length !== 0 && 
														<div dangerouslySetInnerHTML={{__html: data["prod"]["zru"][0]["prod_descriptor"]}}/>
													}
												</Container>
											</Row>
											<Row>
												<Container as="div" bsPrefix="info-block--files-list">
													<Container as="div" bsPrefix="files-list--title">
														Файлы для загрузки
													</Container>
													{data.length !==0 &&
														data["prod"]["zru"][0]["prod_files"] !== null ? 'true' : 'false'
													}
												</Container>
											</Row>
										</Container>
									</Col> 
									<Col lg={6} md={12} sm={12} xs={12}>
										{data.length !== 0 &&
											<Container as="div" bsPrefix="info-block--image"
												style={{backgroundImage: "url(../../../../../public/images/" + data["prod"]["zru"][0]["prod_images"] + ")"}}>
											</Container>
										}
									</Col>
								</Row>
							</Container>
						</Row>
					</Container>
				</Container>
			</Container>
		);
	}
}

export default ChargeDischargeDevices;