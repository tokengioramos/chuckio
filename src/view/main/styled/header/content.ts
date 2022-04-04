import styled from 'styled-components'

const TitleArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Subtitle = styled.span`
	font-size: ${({ theme }) => theme.sizes.small};
	color: ${({ theme }) => theme.colors.grayLight};
`
const Title = styled.span`
	margin-bottom: 5px;
`

const HeaderContent = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
`

export { HeaderContent, TitleArea, Title, Subtitle }
