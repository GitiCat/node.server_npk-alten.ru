import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

class HamburgerMenuBlock extends React.Component {

	constructor(props) {
		super(props);
	}

	setTransitionLink() {
		let factor = 0.08;
		$(".m-cont a").each((index, element) => {
			let transformDelay = (index + 2) * factor;
			let opacityDelay = (index + 1) * factor;
			$(element).css({
				"transition": "transform 1s " + transformDelay + "s cubic-bezier(.29,1.4,.44,.96), opacity " + opacityDelay + "s",
			});
		});
	}

	componentDidMount() {
		$(".i-m-cont").click(function() {
			$(this).toggleClass("opened");
		})
		this.setTransitionLink();
	}

	render() {
		return(
			<Container as="div" bsPrefix="m-cont">
				<Container as="div" bsPrefix="i-m-cont">
					<Container as="div" bsPrefix="m-line i-m-on-line"></Container>
					<Container as="div" bsPrefix="m-line i-m-to-line"></Container>
					<Container as="div" bsPrefix="m-line i-m-th-line"></Container>
				</Container>
				<Container as="div" bsPrefix="c-m-cont">
					<Container as="div" bsPrefix="nav-cont">
						<NavLink exact={true} to='/' activeClassName='active' className="nav-item nav-link">Главная</NavLink>
		                <NavLink to='/history' activeClassName='active' className="nav-item nav-link">История</NavLink>
		                <NavLink to='/activity' activeClassName='active' className="nav-item nav-link">Деятельность</NavLink>
		                <NavLink to='/documents' activeClassName='active' className="nav-item nav-link">Документы</NavLink>
		                <Container as="div" bsPrefix="separator"/>
		                <NavLink to='/company/leadership' activeClassName='active' className="nav-item nav-link">Руководство</NavLink>
		                <NavLink to='/company/patents' activeClassName='active' className="nav-item nav-link">Паттенты</NavLink>
		                <NavLink to='/company/gallery' activeClassName='active' className="nav-item nav-link">Галерея</NavLink>
					</Container>
	                <Container as="div" bsPrefix="nav-cont">
	                	<Container as="div" bsPrefix="nav-cont-title">
	                		<NavLink to='/productions' activeClassName='active' className="nav-item nav-link">Продукция</NavLink>
	                	</Container>
		                <Container as="div" bsPrefix="nav-sub-cont">
		                	<NavLink to={{
			                	pathname: '/productions/rechargeable-batteries',
			                    state: { uploading_data: 'rechargeable-batteries' }
			                }} activeClassName='active' className="nav-item nav-link none">Аккумуляторные батареи</NavLink>
			                <NavLink to={{
			                	pathname: '/productions/primary-sources',
			                    state: { uploading_data: 'primary-sources' }
			                }} activeClassName='active' className="nav-item nav-link none">Первичные источники тока</NavLink>
			                <NavLink to={{
			                	pathname: '/productions/charge-discharge-devices',
			                	state: { uploading_data: 'zru' }
			                }} activeClassName='active' className="nav-item nav-link none">Зарядно - разрядные устройства</NavLink>
		                </Container>
	                </Container>
				</Container>
			</Container>
		);
	}
}

export default HamburgerMenuBlock;