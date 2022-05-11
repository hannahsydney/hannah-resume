import React, { Component } from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
// we'll need the Slide component for sliding animations
// but you can use any other effect
import Slide from 'react-reveal/Slide';
// we'll use styled components for this tutorial
// but you can use any other styling options ( like plain old css )
import styled, { css } from 'styled-components';
// import fris1 from './public/images/fris1.png';
// import fris2 from './public/images/fris2.png';
// import fris3 from 'images/fris3.png';

class Portfolio extends Component {
	render() {
		const width = '100%',
			height = '800px';
		const Container = styled.div`
			overflow: hidden;
			width: ${width};
			background: bottom;
		`;
		const Children = styled.div`
			width: ${width};
			position: relative;
			height: ${height};
			font-color: white;
		`;
		const Arrow = styled.div`
			// text-shadow: 1px 1px 1px #fff;
			color: white;
			z-index: 100;
			line-height: ${height};
			text-align: center;
			position: absolute;
			top: 0;
			width: 10%;
			font-size: 3em;
			cursor: pointer;
			user-select: none;
			${(props) => (props.right ? css`left: 90%;` : css`left: 0%;`)};
		`;
		const CarouselUI = ({ position, total, handleClick, children }) => (
			<Container>
				<Children>
					{children}
					<Arrow onClick={handleClick} data-position={position - 1}>
						{'<'}
					</Arrow>
					<Arrow right onClick={handleClick} data-position={position + 1}>
						{'>'}
					</Arrow>
				</Children>
			</Container>
		);
		const Carousel = makeCarousel(CarouselUI);
		return (
			<section id="frisbee">
				<Carousel>
					<Slide right>
						<div
							style={{
								backgroundImage: 'url("images/fris1.png")',
								height: '100%',
								backgroundSize: 'cover',
								backgroundPosition: 'bottom',
								position: 'relative',
								texAlign: 'center'
							}}
						/>
					</Slide>
					<Slide right>
						<div
							style={{
								backgroundImage: 'url("images/fris2.png")',
								height: '100%',
								backgroundSize: 'cover',
								backgroundPosition: 'bottom',
								position: 'relative',
								texAlign: 'center'
							}}
						/>
					</Slide>
					<Slide right>
						<div
							style={{
								backgroundImage: 'url("images/fris3.png")',
								height: '100%',
								backgroundSize: 'cover',
								backgroundPosition: 'bottom',
								position: 'relative',
								texAlign: 'center'
							}}
						/>
					</Slide>
					<Slide right>
						<div
							style={{
								backgroundImage: 'url("images/manly1.png")',
								height: '100%',
								backgroundSize: 'cover',
								backgroundPosition: 'bottom',
								position: 'relative',
								texAlign: 'center'
							}}
						/>
					</Slide>
				</Carousel>
			</section>
		);
	}
}

export default Portfolio;
