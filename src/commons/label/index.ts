import { HtmlHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface LabelProps extends HtmlHTMLAttributes<HTMLDivElement> {
	animation?: boolean
}

const makeAnimation = () => css`
	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(0.9);
		}
		100% {
			transform: scale(1);
		}
	}

	animation: pulse 0.5s infinite;
`

const Label = styled.div<LabelProps>`
	margin: 20px 0;
	text-align: center;
	font-size: ${({ theme }) => theme.sizes.small};
	${({ animation }) => animation && makeAnimation()}
`

export { Label }
