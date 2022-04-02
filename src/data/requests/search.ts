import axios from 'axios'
import { CHUCK_API } from '..'
import { searchSuccess } from '../handlers/search'
import { Search } from '../types'

async function get(query: string): Promise<Search> {
	return axios.get(`${CHUCK_API}/search?query=${query}`).then(searchSuccess)
}

export const SearchAPI = { get }
