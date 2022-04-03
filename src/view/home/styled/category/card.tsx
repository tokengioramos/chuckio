import React from 'react'
import styled from 'styled-components'
import {
	GiPig,
	GiSuitcase,
	GiTShirt,
	GiStarStruck,
	GiWallet,
	GiLaptop,
	GiSmallFire,
	GiAppleCore,
	GiBookCover,
	GiTv,
	GiMusicalNotes,
	GiTalk,
	GiEgyptianTemple,
	GiMassDriver,
	GiMeshBall,
	GiAirplaneDeparture,
	GiPerspectiveDiceSixFacesRandom,
} from 'react-icons/gi'

const availableIcons = [
	{ icon: <GiPig /> },
	{ icon: <GiSuitcase /> },
	{ icon: <GiStarStruck /> },
	{ icon: <GiLaptop /> },
	{ icon: <GiSmallFire /> },
	{ icon: <GiTShirt /> },
	{ icon: <GiAppleCore /> },
	{ icon: <GiBookCover /> },
	{ icon: <GiWallet /> },
	{ icon: <GiTv /> },
	{ icon: <GiMusicalNotes /> },
	{ icon: <GiTalk /> },
	{ icon: <GiEgyptianTemple /> },
	{ icon: <GiMassDriver /> },
	{ icon: <GiMeshBall /> },
	{ icon: <GiAirplaneDeparture /> },
]

function getCategoryIcon(id: number) {
	return id === -1 ? (
		<GiPerspectiveDiceSixFacesRandom />
	) : (
		availableIcons[id].icon
	)
}

const CategoryCaption = styled.div`
	font-size: 1.5em;
	text-transform: capitalize;
`
const CategoryCard = styled.div`
	height: 100%;
	display: flex;
	overflow: hidden;
	min-height: 160px;
	align-items: center;
	flex-direction: column;
	transition: 0.3s transform;
	justify-content: space-evenly;

	cursor: pointer;
	svg {
		font-size: 3em;
	}
`

export { CategoryCard, CategoryCaption, getCategoryIcon }
