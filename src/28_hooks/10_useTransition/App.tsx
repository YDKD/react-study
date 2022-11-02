import React, { memo, useState, useTransition } from 'react'
import generateNamesArr from './namArr'

const nameArrs = generateNamesArr()

const App = memo(() => {
	const [names, setNames] = useState(nameArrs)

    // useTransition 用于优化 Suspense

    // 用于告诉react，被包裹的组件是否需要优先渲染，从而降级优先级，让其他组件先渲染
	const [pending, startTransition] = useTransition()

	function handleValueChange(event) {
		startTransition(() => {
			const filterArrs = nameArrs.filter(name => name.includes(event.target.value))

			setNames(filterArrs)
		})
	}

	return (
		<div>
			<input type="text" name="" id="" onChange={handleValueChange} />
			<h1>当前状态：{ pending && <span>Loading</span>}</h1>
			<ul>
				{names.map((item, index) => {
					return <li key={index}>{item}</li>
				})}
			</ul>
		</div>
	)
})

export default App
