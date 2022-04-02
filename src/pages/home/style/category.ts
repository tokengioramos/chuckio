import styled from 'styled-components'

const Category = styled.div`
	@keyframes shadowFlicker {
		0% {
			text-shadow: 1px 1px white;
		}
		50% {
			text-shadow: 2px 2px white;
		}
		100% {
			text-shadow: 1px 1px white;
		}
	}
	@font-face {
		font-family: 'FreePixel';
		src: local('FreePixel'),
			url(../../../../src/assets/fonts/FreePixel.ttf) format('woff');
	}
	font-family: 'FreePixel';
	font-weight: bold;
	animation: shadowFlicker 0.3s infinite;
	height: 60px;
	background-color: #ff70a1;
	border-radius: 7px;
	border-color: white;
	color: black;
	font-size: 2em;
	padding: 10px;
	margin-top: auto;
	margin-bottom: auto;
	align-items: center;
	justify-content: center;
	display: flex;
`

export { Category }
