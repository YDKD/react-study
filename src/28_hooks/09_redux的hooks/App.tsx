import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { addNumberAction, changeMessageAction, subNumberAction } from './store/features/counter'


// 1、默认情况下， useSelctor 会订阅 store， 并且每当 action 被分发时，都会重新运行 selector。
// 2、useSelector 的性能优化
// 3、useSelector 的第二个参数
// 4、useSelector 的第二个参数是一个函数，
//  它接收两个参数，分别是上一次 selector 的返回值和本次 selector 的返回值，
//  如果两次返回值相等，那么就不会触发组件的重新渲染。
// 5、useSelector 的第二个参数是一个数组，
//  它里面可以放多个 selector，只要这些 selector 的返回值有一个发生了变化，
//  那么就会触发组件的重新渲染。

//  useSelector 性能优化，传入第二个参数, shallowEqual
const ChildCom = memo(() => {
	console.log('ChildCom render')

	const { message } = useSelector(state => ({
		message: state.counter.message
	}), shallowEqual)

	const dispatch = useDispatch()

	function handleChangeMessage() {
		dispatch(changeMessageAction('hello world xx'))
	}

	return (
		<div>
			<h1>Child: {message}</h1>
			<button onClick={() => handleChangeMessage()}>Change Message</button>
		</div>
	)
})

const App = memo(() => {
	const { count } = useSelector(state => ({
		count: state.counter.count
	}), shallowEqual)

	const dispatch = useDispatch()

	const handleBtnClick = (num: number, isAdd = true) => {
		if (isAdd) {
			dispatch(addNumberAction(num))
		} else {
			dispatch(subNumberAction(num))
		}
	}
	console.log('App render')

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={e => handleBtnClick(1)}>+1</button>
			<button onClick={e => handleBtnClick(1, false)}>-1</button>

			<ChildCom />
		</div>
	)
})

export default App
