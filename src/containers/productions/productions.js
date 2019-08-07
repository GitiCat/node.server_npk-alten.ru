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
			errors: null,
			isLoading: true,
			uploadingData: null,
			selectedIndex: null
		}
	}

	componentDidMount() {
		this.initData();
	}

	initData() {
		let data = null,
			errors = null,
			URLSearch = null,
			url_name = null,
			url_id = null,
			loading = true;

		axios({
			method: "get",
			responseType: "json",
			url: "/api/getProduction"
		})
		.then(response => {
			data = response.data;
			loading = false;
		})
		.catch(error => {
			errors = error,
			loading = false
		});

		URLSearch = new URLSearchParams(this.props.location.search);
		url_name = URLSearch.get("name");
		url_id = URLSearch.get("id");

		this.setState({
			data: data["prod"][url_name],
			errors: errors,
			uploadingData: url_name,
			selectedIndex: url_id,
			isLoading: loading
		});
	}

	render() {

		const { data, errors, isLoading } = this.state;
		console.log("render");

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
								<ProductDisplay data={data} id={this.state.selectedIndex} style={this.state.style}/>
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