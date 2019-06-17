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

    getData() {
        fetch('/api/getProduction', {
        	headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(response => response.json()).then(response => this.setState({data: response}));
    }

	render() {

		const { data } = this.state;

		return(
			<Container fluid className="container-production-catalog-page">
				<Container as="div" bsPrefix="production-catalog-list">
					{data.length !== 0 && 
						data["prod"]["zru"].map(item => {
							return (
								<Container as="div" bsPrefix="production-catalog-list--item"
									style={{backgroundImage: 'url(' + item.prod_images + ')'}}>
									<Container as="div" bsPrefix="item--background">
										<Container as="div" bsPrefix="item--title">
											{item.prod_name}
										</Container>
									</Container>
								</Container>
							)
						})
					}
				</Container>
				<Container fluid className="production-catalog-display">

				</Container>
			</Container>
		);
	}
}

export default ChargeDischargeDevices;