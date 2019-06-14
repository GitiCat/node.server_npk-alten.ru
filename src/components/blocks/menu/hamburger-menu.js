import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

class HamburgerMenuBlock extends React.Component {

	componentWithMount() {
		let burger = document.querySelector('.burger');
		burder.addEventListener('click', function(e) {
			burger.classList.toggle('active');
		});
	}

	render() {
		return(
			<Container as="div" bsPrefix="hamburger-button-layout">
				<svg class="filter" version="1.1">
					<defs>
					    <filter id="gooeyness">
					      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
					      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooeyness" />
					      <feComposite in="SourceGraphic" in2="gooeyness" operator="atop" />
					    </filter>
					</defs>
				</svg>
				<div class="burger">
					<div class="rect"></div>
					<div class="rect"></div>
					<div class="rect"></div>
				</div>
			</Container>
		);
	}
}

export default HamburgerMenuBlock;