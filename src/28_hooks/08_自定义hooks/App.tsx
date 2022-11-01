import React, { memo } from 'react'

import './style.css'

import { useScrollPosition } from './hooks'

const App = memo(() => {
	const result = useScrollPosition()

	return (
		<div className="app">
			<div className="value">
				x: {result.scrollX}, y: {result.scrollY}
			</div>
		</div>
	)
})

export default App
