import axios from 'axios'
import { CHUCK_API } from '..'
import { randomSucess } from '../handlers'
import { Joke } from '../types'

function get(): Promise<Joke> {
	return axios.get(`${CHUCK_API}/random`).then(randomSucess)
}

function getByCategory(categoryName: string): Promise<Joke> {
	return axios
		.get(`${CHUCK_API}/random?category=${categoryName}`)
		.then(randomSucess)
}

export const JokesAPI = {
	get,
	getByCategory,
}
