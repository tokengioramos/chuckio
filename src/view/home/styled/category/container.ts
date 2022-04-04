import styled from 'styled-components'
import { Col } from '../../../../commons/col'

const CardContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: 'stretch';
	align-content: 'stretch';
	height: calc(100vh - 55px);
	justify-content: 'flex-start';

	${Col}:nth-child(even) {
		background: ${({ theme }) => theme.colors.primary};
	}
	${Col}:nth-child(odd) {
		background: ${({ theme }) => theme.colors.secondary};
	}
	${Col}:last-child {
		background: ${({ theme }) => theme.colors.mainGradient};
	}
`

export { CardContainer }
