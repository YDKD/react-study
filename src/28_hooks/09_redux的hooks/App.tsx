import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNumber, subNumber } from './store/features/counter'

const App = memo(() => {
	const { count } = useSelector(state => ({
		count: state.counter
	}))

	const dispatch = useDispatch()

	const handleBtnClick = (num: number, isAdd = true) => {
		if (isAdd) {
			dispatch(addNumber(num))
		} else {
			dispatch(subNumber(num))
		}
	}

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={e => handleBtnClick(1)}>+1</button>
			<button onClick={e => handleBtnClick(1, false)}>-1</button>
		</div>
	)
})

export default App
