import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: 0,
	reducers: {
		addNumber(state, { payload }) {
			return state + payload
		},
		subNumber(state, { payload }) {
			return state - payload
		}
	}
})

export const { addNumber, subNumber } = counterSlice.actions

export default counterSlice.reducer
