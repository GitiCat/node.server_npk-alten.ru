import React from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Container, Row, Col } from "react-bootstrap"
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons"

import * as productsActions from "../../actions/products"

import Header from "../../components/blocks/header/header"
import ProductList from "../../components/blocks/products/product-list/product-list"
import ProductDisplay from "../../components/blocks/products/product-display/product-display"

import ListEntry from "../../components/blocks/list-entry/listEntry"
import Loading from "../../components/blocks/loading-data/loading"
import LoadingError from "../../components/blocks/loading-error/loading-error"

class ProductsByCategory extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			products: [],
			isLoading: true,
			errors: false,
			errorMessage: null,
		}
	}

	async componentDidMount() {
		//	Строка, содержащая url для запроса к api
		let api_url = "/api/v0/products/";
		//	Массив для хранения полученных данных от api
		let response = await this.loadProducts(api_url);
		//	Выделение данных в массиве по параметру

		let search = this.props.location.search;
		let params = new URLSearchParams(search);
		let id = params.get("p_id")

		if(this.state.errors == false) {
			this.setState({
				products: response,
				isLoading: false,
				selectedIndex: this.state.selectedIndex == null && id
			});
		}
	}

	//Асинхроннвая функция, возвращающая массив json данных из api по заданным параметрам
	async loadProducts(url) {
		let json_obj = await fetch(url)
			.then(response => {
				if(response.status !== 200) {
					this.setErrorsStatus(response.status, response.statusText)
					return;
				}
				return response.json()
			});
		return json_obj
	}

	//Функция, устанавливающая состояние в случае возникновения ошибки
	setErrorsStatus(status_code, error_message) {
		let error_string = `В процессе загрузки возникла ошибка: ${error_message}. STATUS CODE: ${status_code}`;

		this.setStatue({
			isLoading: false,
			errors: true,
			errorMessage: error_string
		})
	}

	render() {

		const { products, isLoading, errors, errorMessage } = this.state;
		const { setProductIndex } = this.props.productsActions;
		const { product } = this.props
		const { search_object } = this.props.match.params
		
		let isArrayEntry = null;
		
		if(products.length != 0) {
			if(products[search_object].length == undefined || products[search_object].length == 0) {
				isArrayEntry = true;
			} else {
				isArrayEntry = false
			}
		}

		return (
			<Container fluid className="pbc-cont">
				<Container as="div" bsPrefix="mask"/>
				<Row>
					<Header title={this.props.pages_opt.products.title} subtitle={this.props.pages_opt.products.subtitle} icon={faLayerGroup}/>
				</Row>
				<Row>
					<React.Fragment>
						{isLoading ? (
								<Loading/>
							) : (
								<React.Fragment>
									{errors ? (
											<LoadingError error_message={errorMessage}/>
										) : (
											<Container as="div" bsPrefix="pbc-display">
												{isArrayEntry ? (
														<ListEntry/>
													) : (
														<React.Fragment>
															<ProductList data={products[search_object]} setIndex={setProductIndex}/>
															<ProductDisplay data={products[search_object]} id={product.index}/>
														</React.Fragment>
													)
												}
											</Container>
										)

									}
								</React.Fragment>
							)
						}
					</React.Fragment>
				</Row>
			</Container>
		)
	}
}

function mapStateToProps(state) {
	return {
		pages_opt: state.PagesReducer,
		product: state.ProductsReducer
	}
}

function mapDispatchToProps(dispatch) {
	return {
		productsActions: bindActionCreators(productsActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);