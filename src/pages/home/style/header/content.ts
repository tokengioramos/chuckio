import styled from 'styled-components'

const TitleArea = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Subtitle = styled.span`
	font-size: 12px;
	color: #959595;
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
