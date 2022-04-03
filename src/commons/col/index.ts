import { HtmlHTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface ColProps extends HtmlHTMLAttributes<HTMLDivElement> {
	xs?: number
	sm?: number
	md?: number
	lg?: number
	xl?: number
	xxl?: number
	square?: boolean
}

const makeColumns = (size = 12, square = false) => css`
	max-width: ${100 / (12 / size) + '%'};
	flex: 0 0 ${100 / (12 / size) + '%'};
`

const Col = styled.div<ColProps>`
	flex-basis: 0;
	flex-grow: 1;
	width: 100%;
	box-sizing: border-box;

	${({ xs, square }) => makeColumns(xs, square)}

	@media only screen and (min-width: 576px) {
		${({ sm, square }) => sm && makeColumns(sm, square)}
	}

	@media only screen and (min-width: 768px) {
		${({ md, square }) => md && makeColumns(md, square)}
	}

	@media only screen and (min-width: 992px) {
		${({ lg, square }) => lg && makeColumns(lg, square)}
	}

	@media only screen and (min-width: 1200px) {
		${({ xl, square }) => xl && makeColumns(xl, square)}
	}

	@media only screen and (min-width: 1400px) {
		${({ xxl, square }) => xxl && makeColumns(xxl, square)}
	}
`

export { Col }
