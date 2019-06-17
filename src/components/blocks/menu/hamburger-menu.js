import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavigationLinks from './menu.js';

class HamburgerMenuBlock extends React.Component {

	constructor(props) {
		super(props);
		this.hamburgetClickEvent = this.hamburgetClickEvent.bind(this);
	}

	hamburgetClickEvent(event) {
		let hamButton = document.querySelector('.ham');
		let drawer = document.querySelector('.drawer-list-layout');
		drawer.classList.toggle('active');
		hamButton.classList.toggle('active');
	}

	render() {
		return(
			<div>
				<Container as="div" bsPrefix="hamburger-button-layout">
					<svg className="ham hamRotate"
						viewBox="0 0 100 100" width="80"
						onClick={this.hamburgetClickEvent}>
						<path className="line top"
							d="m 70,33 h -40 c 0,0 -8.5,-0.149796 
							-8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20"/>
						<path className="line middle"
						    d="m 70,50 h -40" />
						<path className="line bottom"
						    d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
					</svg>
				</Container>
				<Container as="div" bsPrefix="drawer-list-layout">
					<NavigationLinks/>
				</Container>
			</div>
		);
	}
}

export default HamburgerMenuBlock;