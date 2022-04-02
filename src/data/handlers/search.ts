import { AxiosResponse } from 'axios'
import { Search } from '../types'

export function searchSuccess(response: AxiosResponse): Search {
	return response.data
}
