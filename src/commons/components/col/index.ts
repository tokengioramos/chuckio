import { HtmlHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface ColProps extends HtmlHTMLAttributes<HTMLDivElement> {
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	xxl?: number
}

const makeColumns = (size = 12) => css`
	max-width: ${100 / (12 / size) + '%'};
	flex: 0 0 ${100 / (12 / size) + '%'};
`

const Col = styled.div<ColProps>`
	flex-basis: 0;
	flex-grow: 1;
	width: 100%;
	min-height: 1px;
	box-sizing: border-box;
	padding: 10px;

	${({ xs }) => makeColumns(xs)}

	@media only screen and (min-width: 576px) {
		${({ sm }) => sm && makeColumns(sm)}
	}

	@media only screen and (min-width: 768px) {
		${({ md }) => md && makeColumns(md)}
	}

	@media only screen and (min-width: 992px) {
		${({ lg }) => lg && makeColumns(lg)}
	}

	@media only screen and (min-width: 1200px) {
		${({ xl }) => xl && makeColumns(xl)}
	}

	@media only screen and (min-width: 1400px) {
		${({ xxl }) => xxl && makeColumns(xxl)}
	}
`

export { Col }
