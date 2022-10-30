import React, { memo, useReducer, useState } from 'react'

const App = memo(() => {
	// useReducer的作用：用于状态逻辑复杂的场景，比如状态依赖于之前的状态，或者状态逻辑比较复杂
	// useReducer的使用场景：比如购物车的商品数量，商品数量的增加和减少，商品数量的增加和减少是依赖于之前的商品数量的

	function reducer(state: { count: number }, action: { type: any; num?: number }) {
		switch (action.type) {
			case 'increment':
				return { count: state.count + 1 }
			case 'decrement':
				return { count: state.count - 1 }
			case 'increment_num':
				return { count: state.count + action.num! }
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducer, { count: 0 })

    const [count, setCount] = useState(10)

	return (
		<div>
			{/* useReducer */}
			<h1>{state.count}</h1>
			<button onClick={() => dispatch({ type: 'increment' })}>increment+1</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>increment-1</button>
            {/* 这里就可以传入其他的state值，用于做其他的额外处理， */}
			<button onClick={() => dispatch({ type: 'increment_num', num: count })}>increment+10</button>
		</div>
	)
})

export default App
