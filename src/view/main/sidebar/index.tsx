import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
	SidebarBackdrop,
	SidebarMenu,
	SidebarContainer,
	MenuItem,
} from '../styled/sidebar'
import { sidebarOpen, toggleSidebar } from '../../../store/slices'
import { GiBirdHouse, GiSpectacleLenses } from 'react-icons/gi'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../../data/consts'
const SidebarApp = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const open = useSelector(sidebarOpen)

	function backdropClickHandler() {
		dispatch(toggleSidebar())
	}

	function navigateHandler(path: string) {
		dispatch(toggleSidebar())
		navigate(path)
	}

	return open ? (
		<SidebarContainer>
			<SidebarMenu>
				<MenuItem onClick={() => navigateHandler(BASE_URL)}>
					<GiBirdHouse></GiBirdHouse>
					{'Home'}
				</MenuItem>
				<MenuItem onClick={() => navigateHandler(`${BASE_URL}/search`)}>
					<GiSpectacleLenses />
					{'Search'}
				</MenuItem>
			</SidebarMenu>
			<SidebarBackdrop onClick={() => backdropClickHandler()}></SidebarBackdrop>
		</SidebarContainer>
	) : (
		<></>
	)
}

export { SidebarApp }
