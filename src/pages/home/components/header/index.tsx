import React from 'react'
import {
	HeaderIcon,
	HeaderContent,
	HeaderContainer,
	TitleArea,
	Subtitle,
	Title,
} from '../../style/header'
import { GiHamburgerMenu } from 'react-icons/gi'

const HeaderHome = () => {
	return (
		<HeaderContainer>
			<GiHamburgerMenu size={25} />
			<HeaderContent>
				<TitleArea>
					<Title>Chuck.io</Title>
					<Subtitle>get a random joke!</Subtitle>
				</TitleArea>
				<HeaderIcon />
			</HeaderContent>
		</HeaderContainer>
	)
}

export { HeaderHome }
