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
const SidebarApp = () => {
	const dispatch = useDispatch()
	const open = useSelector(sidebarOpen)

	function backdropClickHandler() {
		dispatch(toggleSidebar())
	}
	return open ? (
		<SidebarContainer>
			<SidebarMenu>
				<MenuItem>
					<GiBirdHouse></GiBirdHouse>
					{'Home'}
				</MenuItem>
				<MenuItem>
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
