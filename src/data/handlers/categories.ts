import { AxiosResponse } from 'axios'
import { Category } from '../types/category'

export function categorySuccess(response: AxiosResponse): Category[] {
	return response.data.map((name: string, i: number) => {
		return { id: i, name }
	})
}
