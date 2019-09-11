import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const ProductDisplay = ({data = [], id, style}) => (
	<Container as="div" bsPrefix="prod-disp-cont" style={style}>
		<Container as="div" bsPrefix="disp-title">
			<Container as="div" bsPrefix="title-name ms-title-h2">
				<h2>
					<span>
						{data[id].title}
					</span>
				</h2>
			</Container>
			<Container as="div" bsPrefix="title-category">
				<p>
					{data[id].category_name}
				</p>
			</Container>
		</Container>
		<Container as="div" bsPrefix="disp-content-cont">
			<Container as="div" bsPrefix="d-content">
				<Container as="div" bsPrefix="c-info" dangerouslySetInnerHTML={{__html: data[id]["descriptor"]}}/>
				<Container as="div" bsPrefix="c-prop">
					<p>Технические характеристики</p>
					{data[id].specifications != null ? (
						<Container as="div" bsPrefix="c-table-param" dangerouslySetInnerHTML={{__html: data[id]["specifications"]}}/>
					) : (
						<InformationPanel text="Информация о технических характеристиках отсутствует..."/>
					)
					}
				</Container>
				<Container as="div" bsPrefix="c-files">
					<p>Прилагаемые документы</p>
					{ data[id].files != null ?
						stringSplit(data[id].files, ",").map((element, index) => {
							return (
								<button key={index.toString()} className="download-file">
									<Container as="div" bsPrefix="d-content">
										<span>
											{element}
										</span>
									</Container>
								</button>
							)
						})
						: (
							<InformationPanel text="Документы отсутствуют..."/>
						)
					}
				</Container>
			</Container>
			<Container as="div" bsPrefix="image">
				<Container as="div" bsPrefix="" style={{backgroundImage: "url(../../../public/images/" + data[id]["bg_image"] + ")"}}/>
			</Container>
		</Container>
	</Container>
)

const InformationPanel = ({text}) => (
	<Container as="div" bsPrefix="info-panel">
		{text}
	</Container>
)

function stringSplit(text, separator) {
	return text.split(separator);
}

export default ProductDisplay;