import { IAction } from '../types'
import { CHANGE_AGE, CHANGE_NAME } from './constants'

const initialState = {
	name: 'zmy',
	age: 24
}

function reducer(state = initialState, action: IAction) {
	switch (action.type) {
		case CHANGE_NAME:
			return { ...state, name: action.name }
		case CHANGE_AGE:
			return { ...state, age: action.age }
		default:
			return state
	}
}

export default reducer
