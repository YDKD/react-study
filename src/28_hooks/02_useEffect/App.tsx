import React, { memo, useEffect, useState } from 'react'

const App = memo(() => {
	const [count, setCount] = useState(100)
    const [name, setName] = useState('zs')

	// 1、useEffect，常用于模拟生命周期函数
	// 2、useEffect，中的回调函数，会在组件挂载完成后执行
	// 3、useEffect，长用来发送异步请求，获取DOM节点信息

	// 4、useEffect，中的回调函数，会在组件更新完成后执行，且如果没有传递第二个参数，那么每次组件更新都会执行
	useEffect(() => {
		console.log('useEffect被执行了-111')
	})

	// 5、多个useEffect，会按照顺序执行
	useEffect(() => {
		document.title = count + ''
	})

	// 6、useEffect的回调函数，可以返回一个函数，这个函数会在组件卸载前执行
	useEffect(() => {
		console.log('useEffect被执行了-222')

		return () => {
			console.log('useEffect-222的回调函数返回的函数被执行了')
		}
	})

	// 7、useEffect，有第一个参数，为一个数组，数组中有一些依赖项，只有当这些依赖项发生变化时，才会执行useEffect的回调函数

    // 8、useEffect中的第二个参数的依赖项，可以是一个数组，也可以是一个函数
    // 9、useEffect中的第二个参数的依赖项，如果是一个函数，那么这个函数的返回值，就是依赖项
    // 10、useEffect中的第二个参数的依赖项，如果是一个函数，那么这个函数的返回值，如果是一个数组，那么这个数组中的依赖项，就是依赖项
    //   且多个数组中的依赖项，会被合并到一个数组中，且只会执行一次useEffect的回调函数
	useEffect(() => {
		console.log('我是被依赖项的useEffect---数组')
	}, [[count], [name]])

    useEffect(() => {
        console.log('我是被依赖项的useEffect---函数');
        
    }, () => [count, name])

    const hanldeEffect = () => {
        setCount(count + 1)
        setName('ls')
    }

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={() => hanldeEffect()}>+1</button>
		</div>
	)
})

export default App
