import React from 'react'
import {
	HeaderIcon,
	HeaderContent,
	HeaderContainer,
	TitleArea,
	Subtitle,
	Title,
} from '../styled/header'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useDispatch } from 'react-redux'
import { toggleSidebar } from '../../../store/slices'

const HeaderApp = () => {
	const dispatch = useDispatch()

	function toggleHandler() {
		dispatch(toggleSidebar())
	}

	return (
		<HeaderContainer>
			<GiHamburgerMenu
				data-testid="hamburger"
				size={25}
				onClick={() => toggleHandler()}
			/>
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

export { HeaderApp }
