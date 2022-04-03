import axios from 'axios'
import { CHUCK_API } from '../consts'
import { categorySuccess } from '../handlers/'
import { Category } from '../types'

async function get(): Promise<Category[]> {
	return axios.get(`${CHUCK_API}/categories`).then(categorySuccess)
}

export const CategoriesAPI = {
	get,
}
