import React from "react"
import {bindActionCreators} from "redux"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { Container, Row, Col } from "react-bootstrap"
import PropTypes from "prop-types";

import ProductionsList from "../../components/productionsSlider/prod-list.js"
import * as productSelectChangeActions from "../../actions/productions-select-change-actions"

class ProductionsSlider extends React.Component {
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
		const upload_name = this.props.location.state.uploading_data;

		return (
			<Container bsPrefix="container-production-catalog-page">
				{data.length !== 0 &&
					<ProductionsList data={data["prod"][upload_name]}/>
				}
			</Container>
		);
	}
}

const mapStateToProps = (state) => ({
	id: state.productionsChange
})

export default connect(mapStateToProps)(ProductionsSlider);