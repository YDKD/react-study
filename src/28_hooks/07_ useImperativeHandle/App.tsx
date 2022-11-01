import React, { forwardRef, memo, useImperativeHandle, useRef } from 'react'

const ChildCom = memo(
	forwardRef((props, ref) => {
		const inputRef = useRef()

		useImperativeHandle(ref, () => {
			return {
				focus() {
					inputRef.current.focus()
				}
			}
		})
		return (
			<div>
				<h1>ChildCom</h1>
				<input type="text" ref={inputRef} />
			</div>
		)
	})
)

const App = memo(() => {
	const childRef = useRef()

	function hanldeChildFocus() {
		childRef.current!.focus()
	}
	return (
		<div>
			<button onClick={hanldeChildFocus}>focus</button>
			<ChildCom ref={childRef} />
		</div>
	)
})

export default App
