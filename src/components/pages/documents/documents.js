import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Header from "../../blocks/header/header"
import DocumentItem from "./documents-item"
import ListEntry from "../../blocks/list-entry/listEntry"
import Loading from "../../blocks/loading-data/loading"
import { faFileAlt, faFilePdf } from "@fortawesome/free-solid-svg-icons"

class DocumentsComponent extends React.Component {

	constructor(props) {
		super(props);
	
		this.state = {
			documentsData: [],
			categoryData: [],
			isLoading: true
		}
	}

	componentDidMount() {
		this.loadDocuments();
	}

	async loadDocuments() {
		this.setState({
			documentsData: await fetch("/api/v0/documents/").then(response => response.json()),
			categoryData: await fetch("/api/v0/documents-category/").then(response => response.json()),
			isLoading: false
		})
	}

    render() {

    	const { documentsData, categoryData, isLoading } = this.state;

        return (
            <Container fluid>
            	<Row>
            		<Header title="Документы" subtitle="Файлы документов для просмотра и загрузки" icon={faFileAlt}/>
            	</Row>
            	<Row>
            		<Container as="div" bsPrefix="doc-cont">
            			<React.Fragment>
            				{isLoading ? (
	            					<Loading/>
	            				) : (
	            					categoryData.map((item, index) => {
		            					return (
		            						<Container key={index.toString()} as="div" bsPrefix="doc-cat-cont">
			            						<Container as="div" bsPrefix="doc-cat-title">
			            							<Container as="div" bsPrefix="ms-title-h2">
			            								<h2>
				            								<span>
				            									{item.name}
				            								</span>
				            							</h2>
			            							</Container>
			            							<Container as="div" bsPrefix="ms-desc-1">
			            								<p>
			            									{item.descriptor}
			            								</p>
			            							</Container>
			            						</Container>
			            						{documentsData.lenght != 0 ? (
			            								documentsData.map((element, index) => {
				            								if(element.category_id == item.id) {
					            								return (
					            									<DocumentItem key={index.toString()} data={element} category={item.name} icon={faFilePdf}/>
					            								)
					            							}
				            							})
			            							) : (
			            								<ListEntry/>
			            							)
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