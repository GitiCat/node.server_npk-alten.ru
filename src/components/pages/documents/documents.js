import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Header from "../../blocks/header/header"
import DocumentItem from "./documents-item"
import { faFileAlt, faFilePdf } from "@fortawesome/free-solid-svg-icons"

class DocumentsComponent extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
			documents_data: [],
			category_data: [],
			errors: null,
			isLoading: true
		}
	}

	componentDidMount() {
		this.loadDocuments();
	}

	async loadDocuments() {
		this.setState({
			documents_data: await fetch("/api/v0/documents/").then(response => response.json()),
			category_data: await fetch("/api/v0/documents-category/").then(response => response.json())
		})
	}

    render() {

    	const { documents_data, category_data, isLoading } = this.state;
    	console.log(documents_data, category_data);

        return (
            <Container fluid>
            	<Row>
            		<Header title="Документы" subtitle="Файлы документов для просмотра и загрузки" icon={faFileAlt}/>
            	</Row>
            	<Row>
            		<Container as="div" bsPrefix="doc-cont">
            			<React.Fragment>
            				{isLoading ? (
	            					<Container as="div" bsPrefix="loading">
	            						Loading...
	            					</Container>
	            				) : (
	            					data["category"].map((item, index) => {
		            					return (
		            						<Container key={index.toString()} as="div" bsPrefix="doc-cat-cont">
			            						<Container as="div" bsPrefix="doc-cat-title">
			            							<Container as="div" bsPrefix="ms-title-h2">
			            								<h2>
				            								<span>
				            									{item.title}
				            								</span>
				            							</h2>
			            							</Container>
			            							<Container as="div" bsPrefix="ms-desc-1">
			            								<p>
			            									{item.desc}
			            								</p>
			            							</Container>
			            						</Container>
			            						{
			            							data["list"].map((element, index) => {
			            								if(element.category == item.name) {
				            								return (
				            									<DocumentItem key={index.toString()} data={element} icon={faFilePdf}/>
				            								)
				            							}
			            							})
			            						}
			            					</Container>
		            					)
		            				})
	            				)
            				}
            			</React.Fragment>
            		</Container>
            	</Row>
            </Container>
        );
    }
}

export default DocumentsComponent;