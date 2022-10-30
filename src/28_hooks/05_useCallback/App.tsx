import React, { memo, useCallback } from 'react'

const Child = memo(props => {
	const { toIcrement } = props
	console.log('Child render')
	return (
		<div>
			<button onClick={toIcrement}>Change Count</button>
		</div>
	)
})

const App = memo(() => {
	const [count, setCount] = React.useState(0)

	const [message, setMessage] = React.useState('hello')

	// useCallback的作用：用于优化函数组件，避免函数组件的重复渲染
	// useCallback的使用场景：比如在函数组件中，如果有一个函数，这个函数是作为子组件的props传递给子组件的，那么这个函数就会被重复的创建，这样就会导致子组件的重复渲染，这个时候就可以使用useCallback来优化这个函数，避免函数组件的重复渲染
	// useCallback的使用方法：useCallback(() => {}, [])，第一个参数是函数，
	// 第二个参数是依赖项，如果依赖项为空数组，那么这个函数就只会被创建一次，如果依赖项不为空数组，
	// 那么这个函数就会在依赖项发生变化的时候被重新创建
	// useCallback的返回值：返回一个函数

    // useCallback中，如果依赖项没有发生变化，则每次函数重新执行的时候，还是会记录上一次的依赖项，这样就会导致函数组件的重复渲染

	const increment = useCallback(() => {
		console.log('函数重新执行了')
		setCount(count + 1)
	}, [count])

	return (
		<div>
			<h1>{count}</h1>
			<h1>{message}</h1>
			<button onClick={increment}>+1</button>
			<button onClick={() => setMessage('ls')}>Change Message</button>
			<Child toIcrement={increment} />
		</div>
	)
})

export default App
