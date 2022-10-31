import React, { memo, useMemo, useState } from 'react'

function calcTotalNum(num: number): number {
	console.log('calcTotalNum执行了')

	let total = 0
	for (let i = 1; i <= num; i++) {
		total += i
	}

	return total
}


const App = memo(() => {
	const [count, setCount] = useState(0)

    const [count2, setCoun2] = useState(100)

	// useMemo的作用：用于优化函数组件，避免函数组件的重复渲染
	// useMemo主要是对函数的返回值进行记忆，而usecallback则是对这个回调函数进行记忆

	// 如果依赖项是一个空数组，则calcTotalNum只会执行一次
	// const total = useMemo(() => calcTotalNum(50), [])

	// 如果有依赖项，则当依赖项发生变化时，就会重新执行calcTotalNum
	const total = useMemo(() => calcTotalNum(50), [count])

	// useMemo，也可以写出useCallback的效果
	const useCallback = useMemo(
		() => () => {
			console.log('useCallback执行了')
            setCoun2(count2 + 1)
		},
		[count]
	)

	return (
		<div>
			<h1>当前计数: {total}</h1>
			<h1>count: {count}</h1>
            <h1>message: {count2}</h1>
			<button onClick={() => setCount(count + 1)}>+1</button>
			<button onClick={() => useCallback()}>useCallback</button>
		</div>
	)
})

export default App
