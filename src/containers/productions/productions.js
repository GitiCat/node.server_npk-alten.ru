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
			uploadingData: this.props.location.state.uploading_data,
			data: [],
			errors: null,
			isLoading: true,
			selectedIndex: 0
		}
	}

	componentDidMount() {
		this.getData();
	}

	getData() {
		axios({
			method: "get",
			responseType: "json",
			url: "/api/getProduction"
		})
		.then(response => {
			this.setState({
				data: response.data["prod"][this.state.uploadingData],
				isLoading: false
			})
		})
		.catch(error => {
			this.setState({
				errors: error,
				isLoading: false
			})
		})
	}

	render() {

		const { data, errors, isLoading } = this.state;

		return (
			<Container fluid className="pbc-cont">
				<Container as="div" bsPrefix="mask"/>
				<Row>
					{ data.length != 0 &&
						<Header title="Продукция" subtitle={data[0].prod_category_name} icon={faLayerGroup}/>
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
								<ProductList data={data}/>
								<ProductDisplay data={data} id={this.state.selectedIndex}/>
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