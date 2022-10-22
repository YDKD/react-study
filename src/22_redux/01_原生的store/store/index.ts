import { createStore } from 'redux'

type TActionType = 'change_name'

interface IAction {
	type: TActionType
	name?: string
	age?: number
}

const initialState = {
	name: 'zmy',
	age: 24
}

function reducer(state = initialState, action: IAction) {
	switch (action.type) {
		case 'change_name':
			return { ...state, name: action.name }
		default:
			return state
	}
}

export default createStore(reducer)
