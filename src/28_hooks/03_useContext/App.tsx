import React, { memo, useContext } from 'react'
import { ThemeContext, UserContext } from './context'

const App = memo(() => {
	const user = useContext(UserContext)
	const theme = useContext(ThemeContext)
	return (
		<div>
			<h1>userContext: {'name:' + user.name + '-' + 'age:' + user.age}</h1>
			<div style={{ color: theme.color, fontSize: theme.fontSize }}>ThemeContext</div>
		</div>
	)
})

export default App
