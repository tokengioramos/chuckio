import logo from '../../../assets/img/logo.png'
import styled from 'styled-components'

const Spinner = styled.div`
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	width: 50px;
	height: 50px;
	background-size: contain;
	animation: spin 1s infinite;
	background-image: url(${logo});
	margin-bottom: 15px;
	animation-timing-function: linear;
`

const SpinnerContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`

const SpinnerCaption = styled.span`
	font-size: 1em;
`

export { Spinner, SpinnerContainer, SpinnerCaption }
