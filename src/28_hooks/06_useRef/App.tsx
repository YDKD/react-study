import React, { memo, useRef } from 'react'

const App = memo(() => {
	const inputRef = useRef()
	function showInput() {
		console.log(inputRef.current!.value)
	}
	return (
		<div>
			<input type="text" ref={inputRef} />
			<button onClick={showInput}>useRef</button>
		</div>
	)
})

export default App
