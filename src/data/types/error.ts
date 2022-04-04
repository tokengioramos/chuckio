import { PayloadAction } from '@reduxjs/toolkit'

type Error = {
	message: string
	name: string
	stack: string
}

type ErrorMeta = {
	aborted: boolean
	arg: string
	condition: boolean
	rejectedWithValue: boolean
	requestId: string
	requestStatus: string
}

export type PayloadError = {
	error: Error
	meta: ErrorMeta
	payload: PayloadAction
	type: string
}
