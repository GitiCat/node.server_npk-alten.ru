import React from "react"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import axios from "axios"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

import Header from "../../components/blocks/header/header"
import ProductList from "../../components/blocks/products/product-list/product-list"
import ProductDisplay from "../../components/blocks/products/product-display/product-display"

class ProductsByCategory extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: [],
			isErrors:false,
			errors: null,
			isLoading: true,
			uploadingData: '',
			selectedIndex: null
		}
	}

	componentDidMount() {
		this.dataLoad();
	}

	urlSearchUpdate() {
		let urlSearch = new URLSearchParams(this.props.location.search);

		this.setState({
			uploadingData: urlSearch.get("name"),
			selectedIndex: urlSearch.get("id")
		});
	}
	
	dataLoad() {
		axios({
			method: 'get',
			responseType: 'json',
			url: '/api/getProduction'
		})
		.then(response => {
			this.setState({
				data: response.data,
				isLoading: false,
			})
		})
		.catch(error => {
			this.setState({
				errors: error,
				isErrors: true,
				isLoading: false
			})
		})
	}

	render() {

		const {data, isLoading, isErrors, errors, uploadingData } = this.state;
		let s_data = null;

		if(data.length !== 0) {
			s_data = data["prod"][uploadingData];
		}

		return (
			<Container fluid className="pbc-cont">
				<Container as="div" bsPrefix="mask"/>
				<Row>
					{ s_data !== null &&
						<Header title="Продукция" subtitle={s_data[0].prod_category_name} icon={faLayerGroup}/>
					}
				</Row>
				<Row>
					<React.Fragment>
						{isLoading ? (
							<Container as="div" bsPrefix="loading">
								Loading...
							</Container>
						) : (
							<Container as="div" bsPrefix="pbc-display">
								<ProductList data={s_data}/>
								<ProductDisplay data={s_data} id={this.state.selectedIndex} style={this.state.style}/>
							</Container>
						)
						}
					</React.Fragment>
				</Row>
			</Container>
		)
	}
}

export default connect()(ProductsByCategory);