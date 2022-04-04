import styled from 'styled-components'

const ResultCard = styled.div`
	margin: 0 20px 10px 20px;
	padding: 15px;
	background: ${({ theme }) => theme.colors.primary};
`

const CardTitle = styled.div`
	min-height: 20px;
	font-weight: bold;
	text-transform: capitalize;
	color: ${({ theme }) => theme.colors.tertiary};
`

const CardContent = styled.div`
	margin: 20px 0;
`

const CardDate = styled.div`
	text-align: right;
	color: ${({ theme }) => theme.colors.grayLight};
`

export { ResultCard, CardContent, CardDate, CardTitle }
